import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Counter } from './components/Counter/Counter';

import './styles/App.css';

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }
  // Método responsável por renderizar o conteúdo HTML do nosso componente.
  render() {
    return (
      <>
        <Navbar />
        <h1 className="ciclo">Ciclo de Vida no React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador'}
        </button>

        {this.state.showCounter ? <Counter /> : null}
      </>
    );
  }
}

export default App;
