import React, { Component } from 'react';

class CadastrarDesaparecido extends Component {
    render(){
        return(<div class="edit-profile-container">
                    <div class="block-title">
                        <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Cadastrar Desaparecido</h4>
                        <div class="line"></div>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        <div class="line"></div>
                    </div>
                    
                    <div class="edit-block">
                        <form name="basic-info" id="basic-info" class="form-inline">
                            <div class="row">
                                <div class="form-group col-xs-6">
                                    <label for="firstname">First name</label>
                                    <input id="firstname" class="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder="First name" value="John" />
                                </div>
                                <div class="form-group col-xs-6">
                                    <label for="lastname" class="">Last name</label>
                                    <input id="lastname" class="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder="Last name" value="Doe" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <label for="email">My email</label>
                                    <input id="email" class="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="My Email" value="razor.venon@gmail.com" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <label for="my-info">About me</label>
                                    <textarea id="my-info" name="information" class="form-control" placeholder="Some texts about me" rows="4" cols="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                </div>)        
    }
}

export default CadastrarDesaparecido;