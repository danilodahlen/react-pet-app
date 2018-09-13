//import { connect } from 'react-redux';
import React, { Component } from 'react';
import Helper from '../../JS/Funcoes.Gerais';

class FormCategoria extends Component {
    constructor(props){
        super(props);

        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.changetxtCategoria = this.changetxtCategoria.bind(this);
    }

    changetxtCategoria(event){
        this.setState({
            categoria : {
                nome_categoria: event.target.value,
                operacao: 1
            }
        })
        
    }

    handlerSubmit(event){
        event.preventDefault();

        console.log(Helper);
        /*
        var categoria = {
            nome_categoria: "teste", operacao: 1
        }
        
        fetch("http://localhost:37995/api/cadastro/gravarCategoria", {
            method: 'POST',
            headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
              }),
            body: "nome_categoria=fsdfdsfsf&operacao=another"
          })
          .then((response) => response.text())
          .then((responseText) => {
            alert(responseText);
          })
          .catch((error) => {
              console.error(error);
        });
        */
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
                                    <input id="txtCategoria" class="form-control input-group-lg" type="text" name="txtCategoria" title="Enter first name" onChange={this.changetxtCategoria}/>
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