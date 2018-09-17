import { combineReducers } from 'redux';

/*************************ADM***********************/
import categoriaReducer from './Adm/categoriaReducer';
import tipoReducer from './Adm/tipoReducer';
import loginReducer from './Adm/loginReducer';

export default combineReducers({
    /*************************ADM***********************/
    categoriaReducer,
    tipoReducer,
    loginReducer
    
});