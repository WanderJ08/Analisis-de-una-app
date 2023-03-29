import React, { Component } from 'react';
import axios from 'axios';//GRACIAS A AXIOS SE LE PUEDE HACER CONSOLTAS A LA API 

class Fib extends Component {//LA CLASE FIB CONTIENE BASICAMENTE LO QUE NECESITAMOS PARA ACTUALIZAR LOS DATOS SIN ACTUALIZAR LA PAGINA
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  async fetchValues() {
    const values = await axios.get('/api/values/current');//SIRVE PARA GUARDAR DENTRO DE VALUES TODOS LOS VALORES QUE OBTIENE DE REDIS
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');//SIRVE PARA GUARDAR DENTRO DE SEENINDEXES TODOS LOS VALORES QUE OBTIENE DE POSTGRE(DE LA BASE DE DATOS)
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  componentDidMount() 
  {//SIRVE PARA EJECUTAR ESTAS DOS FUNCIONES
    this.fetchValues();
    this.fetchIndexes();
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
    this.fetchValues();
    this.fetchIndexes();//SIRVE PARA QUE EL SUBMIT SE LIMPIE SOLO
  };// SIRVE PARA PREVENIR QUE LA PAGINA SE ESTE ACTUALIZANDO CADA VEZ QUE SE DE A SUBMIT 

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }//SIRVE PARA OBTENER EL VALOR DE CADA UNO DE LOS INDICES Y SEPARARLOS POR COMA Y AGREGARLE UN ESPACIO

  renderValues() 
  {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }//POR CADA CLAVE DENTRO DE VALUES VA DEVOLVER For index {key} I calculated {this.state.values[key]

    return entries;
  }

  render() 
  {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );//RENDER SE ENCARGA DE RETORNAR EL CUADRO DE TEXTO QUE NOS PIDE QUE INGRESEMOS NUESTRO INDEX Y LO VA ALMACENANDO
    // LUEGO MUESTRA EL TITULO INDEXES I HAVE SEEN (LOS INDEX QUE TENEMOS) Y TRAE LA FUNCION QUE ARRIBA DECLARAMOS LA CUAL NOS LO MOSTRABA 
    //LUEGO MUESTRA EL TITULO DE CALCULATED VALUES Y NOS TRAE LA FUNCION QUE NOS MUESTRA LOS FOR INDEX {KEY} I CALCULATED {}
  }
}

export default Fib;
