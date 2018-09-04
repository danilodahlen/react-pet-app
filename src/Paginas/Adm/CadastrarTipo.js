import React, { Component } from 'react';

import Header from '../../Componentes/Adm/Header.js';
import FormTipo from '../../Componentes/Adm/FormTipo.js';
import ListarTipo from '../../Componentes/Adm/ListarTipo.js';

class CadastrarTipo extends Component {

    render(){
        return(<div>
                    <Header/>
                    <div id="lp-register">
                    <div class="container wrapper">
                        <div class="row">
                            <FormTipo/>
                        </div>
                        <div class="row">
                            <ListarTipo/>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default CadastrarTipo;
