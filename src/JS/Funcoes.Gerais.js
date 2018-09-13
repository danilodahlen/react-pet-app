import React, { Component } from 'react';


class Helper extends Component {  
    render(){
        return{
            f_parametrizaPost(v_Param){
                console.log(v_Param);
            
                return v_Param;
            },

            f_replaceAll(v_Texto, Substituir_De, Substituir_Por) {
                v_Texto = v_Texto.toString();
                while (v_Texto.indexOf(Substituir_De) > -1) {
                    v_Texto = v_Texto.replace(Substituir_De, Substituir_Por);
                }
            
                return v_Texto;
            },

            f_converterJsonToString(v_Param) {
                return JSON.stringify(v_Param);
            },
            
            f_toInt(v_Param) {
                return this.f_replaceAll(this.f_replaceAll(v_Param, '.', ''), ',', '');
            },
            
            f_toFloat(v_Param) {
                return this.f_replaceAll(v_Param, ',', '.');
            },
            
            f_toDecimal(v_Param) {
                return this.f_replaceAll(v_Param, ',', '.');
            },
            
            f_toDate(v_Param) {
                return v_Param.split("/")[2] + '-' + v_Param.split("/")[1] + '-' + v_Param.split("/")[0];
            },
            
            f_zeroEsquerda(v_Valor, v_Tamanho) {
                v_Valor = v_Valor.toString();
                while (v_Valor.length < v_Tamanho)
                    v_Valor = 0 + v_Valor;
                return v_Valor;
            },

            f_convertJsonToArray(v_Param) {
                var keys = Object.keys(v_Param);
                var v_result = new Array(keys.length * 2);
                var j = 0;
            
                for (var i = 0; i < keys.length; i++) {
                    v_result[j] = keys[i];
                    v_result[j + 1] = v_Param[keys[i]];
                    j = j + 2;
                }
            
                return v_result;
            }
            
        };
    }
}

export default Helper;