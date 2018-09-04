import React, { Component } from 'react';

import axios from 'axios';

class FormCategoria extends Component {
    constructor(props){
        super(props);

        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.changetxtTipo = this.changetxtTipo.bind(this);
    }

    changetxtTipo(event){
        this.setState({
            categoria : {
                nome_categoria: event.target.value,
                operacao: 1
            }
        })
    }

    handlerSubmit(event){
        event.preventDefault();

        var categoria = {
            nome_categoria: event.target.value,
            operacao: 1
        }
        
        axios.post(`http://localhost:37995/api/cadastro/gravarCategoria`, this.state.categoria)
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    }


    render(){
        return(<div class="edit-profile-container">
                    <div class="block-title">
                        <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Cadastrar Tipo</h4>
                        <div class="line"></div>
                    </div>
                    <div class="edit-block">
                        <form name="basic-info" id="basic-info" class="form-inline" onSubmit={this.handlerSubmit}>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <label for="firstname">Categoria</label>
                                    <input id="txtTipo" class="form-control input-group-lg" type="text" name="txtTipo" title="Enter first name" onChange={this.changetxtTipo}/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9">
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-primary" onc>Salvar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }
}

export default FormCategoria;