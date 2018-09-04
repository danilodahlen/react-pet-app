import React, { Component } from 'react';

import Header from '../../Componentes/Adm/Header.js';
import FormCategoria from '../../Componentes/Adm/FormCategoria.js';
import ListarCategoria from '../../Componentes/Adm/ListarCategoria.js';

class CadastrarCategoria extends Component {

    render(){
        return(<div>
                    <Header/>
                    <div id="lp-register">
                    <div class="container wrapper">
                        <div class="row">
                            <FormCategoria/>
                        </div>
                        <div class="row">
                            <ListarCategoria/>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default CadastrarCategoria;
