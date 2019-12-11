import {combineReducers} from 'redux';
import authReducer from './authReducer'
// import signInReducer from './signinReducer'
export default combineReducers({
    Auth: authReducer,
   
})