import React, { Component } from 'react';

class PerfilMenu extends Component {
    render(){
        return(<ul class="edit-menu">
                    <li class="active"><i class="icon ion-ios-information-outline"></i><a href="edit-profile-basic.html">Basico</a></li>
                    <li><i class="icon ion-ios-briefcase-outline"></i><a href="edit-profile-work-edu.html">Pets</a></li>
                    <li><i class="icon ion-ios-heart-outline"></i><a href="edit-profile-interests.html">Endereco</a></li>
                    <li><i class="icon ion-ios-settings"></i><a href="edit-profile-settings.html">Senha</a></li>
                </ul>)
    }
}

export default PerfilMenu;