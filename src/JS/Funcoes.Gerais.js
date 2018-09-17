
const f_parametrizaPost = function(v_Param){
    var v_Param = f_convertJsonToArray(v_Param);
    var v_Result = '';

    v_Param.forEach(function(v_Object,v_Index){
        if(v_Index % 2 == 0)
            v_Result += v_Param[v_Index] + "=";
        else
            v_Result += v_Param[v_Index] + "&";
    }); 
    
    if(v_Result.length > 1){
       v_Result = v_Result.substring(0,v_Result.length - 1)
    }
    return v_Result;
}

const f_replaceAll = function(v_Texto, Substituir_De, Substituir_Por) {
    v_Texto = v_Texto.toString();
    while (v_Texto.indexOf(Substituir_De) > -1) {
        v_Texto = v_Texto.replace(Substituir_De, Substituir_Por);
    }
    return v_Texto;
}

const f_converterJsonToString = function(v_Param) {
    return JSON.stringify(v_Param);
}

const f_toInt = function(v_Param) {
    return f_replaceAll(f_replaceAll(v_Param, '.', ''), ',', '');
}

const f_toFloat = function(v_Param) {
    return this.f_replaceAll(v_Param, ',', '.');
}

const f_toDecimal = function(v_Param) {
    return this.f_replaceAll(v_Param, ',', '.');
}

const f_toDate = function(v_Param) {
    return v_Param.split("/")[2] + '-' + v_Param.split("/")[1] + '-' + v_Param.split("/")[0];
}

const f_zeroEsquerda = function(v_Valor, v_Tamanho) {
    v_Valor = v_Valor.toString();
    while (v_Valor.length < v_Tamanho)
        v_Valor = 0 + v_Valor;
    return v_Valor;
}

const f_convertJsonToArray = function(v_Param) {
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

export {
    f_parametrizaPost,
    f_replaceAll,
    f_converterJsonToString,
    f_toInt,
    f_toFloat,
    f_toDecimal,
    f_toDate,
    f_zeroEsquerda,
    f_convertJsonToArray
  }


            
            
