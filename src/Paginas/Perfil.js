import React, { Component } from 'react';
import HeaderCapa from '../Componentes/HeaderCapa.js';

import BoxPublicacao from '../Componentes/BoxPublicacao.js';
import BoxDesaparecido from '../Componentes/BoxDesaparecido.js';
import BoxDoacao from '../Componentes/BoxDoacao.js';

class Perfil extends Component {
    render() {
        return(<div class="timeline">
                    <HeaderCapa/>
                    <div id="page-contents">
                        <div class="col-md-3 col-lg-3">
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <BoxPublicacao/>
                        </div>
                        <div class="col-md-2 col-lg-2 static">
                            <BoxDesaparecido/>
                            <BoxDoacao/>                    
                        </div>
                    </div>  
                </div>)
    }
}

export default Perfil;