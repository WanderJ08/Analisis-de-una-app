const keys = require("./keys"); //sIRVE PARA LLAMAR LAS KEYS

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");// LLMANDO LAS COSAS NECESARIAS PARA TRABAJAR

const app = express();
app.use(cors());//DESHABILITAMOS CORS PARA PERMITIR  LA INTERCONEXCION ENTRE EL CLIENTE Y EL API
app.use(bodyParser.json());//CONVERTIR LOS DATOS QUE SE RECIBEN EN FORMATO JSON

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
}); //Se almacena la conexion dentro de la constante pgClient

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.error(err));
});//SI NO EXISTE LA TABLA DE VALORES LA CREA Y TENDRA UN CAMPO LLAMADO NUMER QUE SERA TIPO ENTERO

// Redis Client Setup
const redis = require("redis");
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});//SE CREA LA CONEXCION CON REDIS (ES UNA BASE DE DATOS QUE SE ALMACENA EN LA CACHE), Y SE RESTABLECE CADA 1000 MILISEGUNDOS
const redisPublisher = redisClient.duplicate();

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});//SI ENTRA A LA RUTA DEL API MOSTRARÁ HI

app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * from values");

  res.send(values.rows);
});//SI ENTRA A ESTA RUTA MUESTRA TODOS LOS VALORES DE LA TABLA VALUES

app.get("/values/current", async (req, res) => {
  redisClient.hgetall("values", (err, values) => {
    res.send(values);
  });//SI ENTRA A ESTA RUTA SE OBTIENE TODO DE LA TABLA VALUES DE REDIS(AUNQUE EN REDIS NO SE CONOCE COMO TABLA)
});

app.post("/values", async (req, res) => {
  const index = req.body.index;
  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high");
  }

  redisClient.hset("values", index, "Nothing yet!");
  redisPublisher.publish("insert", index);
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

  res.send({ working: true });
});// RECIBIMOS LOS DATOS QUE NOS ENVIAN Y LOS ALMACENAMOS EN LA CONS INDEX Y LOS RECIBIMOS GRACIAS AL REQ.BODY
//LUEGO SE GUARDA UNA ESPECIE DE TABLA EN LA CACHE Y LE AGREGO EL NUMERO QUE SE NOS DIO EN INDEX
//PUBLICA UNA CONEXION DONDE SOLO SE PUEDE ENTRAR HACIENDO REFERENCIA A INSERT Y LE ESTAMOS ENVIANDO EL VALOR DE INDEX(CLAVE:INSERT VALOR:INDEX)
app.listen(5000, (err) => {
  console.log("Listening");
});
