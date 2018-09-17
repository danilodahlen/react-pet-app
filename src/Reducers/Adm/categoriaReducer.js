export default function reducer(state={
    categorias: [],
    fetching: false,
    fetched: false,
    error: null
},action){

    switch(action.type){
        case "RETORNA_CATEGORIA":{
            return {...state, fetching: false, fetched: true, categorias: action.payload}
        }
        case "RETORNA_CATEGORIA_ERRO":{
            return {...state, fetching: false, error: action.payload}
        }
        case "SALVAR_CATEGORIA":{
            return {...state, fetching: false, fetched: true, categorias: action.payload}
        }
        case "SALVAR_CATEGORIA_ERRO":{
            return {...state, fetching: false, error: action.payload}
        }
    }
}