import React, { Component } from 'react';
import HeaderCapa from '../Componentes/HeaderCapa.js';
import BoxFotoAlbum from '../Componentes/BoxFotoAlbum.js';
import BoxDesaparecido from '../Componentes/BoxDesaparecido.js';
import BoxDoacao from '../Componentes/BoxDoacao.js';


class Album extends Component {
    render() {
        return(<div class="timeline">
                    <HeaderCapa/>
                    <div id="page-contents">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-7">
                                <BoxFotoAlbum/>
                            </div>
                            <div class="col-md-2">
                                <BoxDesaparecido/>
                                <BoxDoacao/>
                            </div>
                        </div>
                    </div>
                </div>)
    }
}


export default Album;