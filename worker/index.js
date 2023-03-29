const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({//SE CREA UNA CONSTANTE CLIENTE
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();//SE CREA UNA COPIA DE CLIENTE

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);//LOGICA PARA HACER EL CALCULO DE FIGONASIS 
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});//SOBRE LA COPIA DE CLIENTE SE EXTRAE EL CANAL Y EL MENSAJE(CLAVE/VALOR)
//DENTRO DEL REDIS SE GUARDA EL VALOR DEL MESSAGE CON EL DE EL FIGONASIS 

sub.subscribe('insert');//ME SUSCRIBE A INSERT Y CUANDO INSERT HACE UNA MODIFICACION VUELVE AQUI Y HACE LAS RESPECTIVAS OPERACIONES(ALGO SIMILAR A LAS SUSCRIPCIONES DE YOUTUBE)
