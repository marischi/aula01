import './App.css';
import React, { Component, useState } from 'react';
import TemplateExpressions from './components/TemplateExpressions';
import Gato from './assets/gato.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <hr></hr>
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2> Olá, sou o(a) {this.props.nome} </h2>
        <h3> Cargo: {this.props.cargo} </h3>
        <h3> Idade: {this.props.idade} </h3>
      </div>
    );
  }
}

function App() {
  //const nome = 'Mauro';
  const [useName] = useState('Patrícia');

  return (
    <div className="App">
      <h1>Aula 01</h1>
      <TemplateExpressions />

      {/* imagem na pasta public */}
      <div>
        <img src="/praia.jpg" alt="praia"></img>
      </div>

      {/* imagem na pasta assets */}
      <div>
        <img src={Gato} alt="gato"></img>
      </div>
      <ManageData />

      <ListRender />

      <ShowUserName name={useName} />

      <div>
        <h1>Conheça a nossa equipe!</h1>
        <Equipe nome="Leandro" cargo="Programador" idade="25" />
        <Equipe nome="Maria" cargo="UX-UI" idade="28" />
        <Equipe nome="Kátia" cargo="Arquiteta de Software" idade="32" />
      </div>
    </div>
  );
}

export default App;
