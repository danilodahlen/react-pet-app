import React, { Component } from 'react';
import HeaderCapa from '../Componentes/HeaderCapa.js';
import BoxDesaparecido from '../Componentes/BoxDesaparecido.js';
import BoxDoacao from '../Componentes/BoxDoacao.js';
import BoxPublicacao from '../Componentes/BoxPublicacao.js';
import CaixaPublicacao from '../Componentes/CaixaPublicacao.js';
import Upload from '../Componentes/Upload.js';

class Timeline extends Component {
    render() {
    return (<div class="timeline">
                <HeaderCapa/>
                <div id="page-contents">
                    <div class="row">
                        <div class="col-md-2 col-lg-2">
                        </div>
                        <div class="col-md-7 col-lg-7">
                            <CaixaPublicacao/>
                            <Upload/>
                            <BoxPublicacao/>
                        </div>
                        <div class="col-md-2 col-lg-2 static">
                            <BoxDesaparecido/>
                            <BoxDoacao/>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Timeline;