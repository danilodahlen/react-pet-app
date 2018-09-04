import React, { Component } from 'react';
import HeaderCapa from '../Componentes/HeaderCapa.js';
import BoxAmigos from '../Componentes/BoxAmigos.js';
import BoxDesaparecido from '../Componentes/BoxDesaparecido.js';
import BoxDoacao from '../Componentes/BoxDoacao.js';

class Amigos extends Component {
    render() {
        return (<div class="timeline">
                    <HeaderCapa/>
                    <div id="page-contents">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-7">
                                <BoxAmigos/>
                            </div>
                            <div class="col-md-2">
                                <BoxDesaparecido/>
                                <BoxDoacao/>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}


export default Amigos;