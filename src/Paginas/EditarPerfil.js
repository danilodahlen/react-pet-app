import React, { Component } from 'react';
import HeaderCapa from '../Componentes/HeaderCapa.js';

import PerfilMenu from '../Componentes/Perfil/PerfilMenu.js';
import PerfilBasico from '../Componentes/Perfil/PerfilBasico.js';
import PerfilEndereco from '../Componentes/Perfil/PerfilEndereco.js';
import PerfilSenha from '../Componentes/Perfil/PerfilSenha.js';

import BoxDesaparecido from '../Componentes/BoxDesaparecido.js';
import BoxDoacao from '../Componentes/BoxDoacao.js';

class EditarPerfil extends Component {
    render() {
        return(<div class="timeline">
                    <HeaderCapa/>
                    <div id="page-contents">
                        <div class="col-md-3 col-lg-3">
                            <PerfilMenu/>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <PerfilBasico/>       
                            <PerfilEndereco/>  
                            <PerfilSenha/>
                        </div>
                        <div class="col-md-2 col-lg-2 static">
                            <BoxDesaparecido/>
                            <BoxDoacao/>                    
                        </div>
                    </div>
                </div>)
    }
}

export default EditarPerfil;