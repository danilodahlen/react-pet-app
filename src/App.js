import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from './Paginas/Timeline.js';
import Amigos from './Paginas/Amigos.js';
import Album from './Paginas/Album.js';
import EditarPerfil from './Paginas/EditarPerfil.js';
import Perfil from './Paginas/Perfil.js';
import Doacoes from './Paginas/Doacoes.js';
import Desaparecidos from './Paginas/Desaparecidos.js';
import Home from './Paginas/Home.js';
import CadastrarCategoria from './Paginas/Adm/CadastrarCategoria.js';
import CadastrarTipo from './Paginas/Adm/CadastrarTipo.js';

class App extends Component {
  render() {
    return (
        //<CadastrarTipo/>
        //<div class="container"><Amigos/></div>  
        //<Timeline/>  
        //<Amigos/>
        //<Album/>
        //<Perfil/>
        //<Doacoes/>
        //<Desaparecidos/>
        //<Home/>
        <CadastrarCategoria/>
        //<CadastrarTipo/>
    );
  }
}

export default App;
