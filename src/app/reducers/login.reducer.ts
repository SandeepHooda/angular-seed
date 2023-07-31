import { createReducer,  on } from '@ngrx/store';
import {LoginVO}  from '../comp/read-data/LoginVO';
import * as LoginVOActions from '../actions/loginvo.actions';
import { loginDataObjectNameInStore, nameObjectNameInStore } from './app.state';




let init:LoginVO = new LoginVO()
    export const loginReducer = createReducer(
      {},
      on(LoginVOActions.GetLogin, (state) => {
           
        return state;
      }),
      on(LoginVOActions.GetLoginSuccess, (state, loginDataVO) => {
        console.log("login success "+loginDataVO.regID); 
    
        return {...state, [loginDataObjectNameInStore]:loginDataVO} //This will create new State by coping existing immutable state and then adding loginDataVO to it. The name of loginDataVO object is defined by loginDataObjectNameInStore variable 
      }),

      on(LoginVOActions.GetNameSuccess, (state, nameVOData) => {
        console.log("name success "+nameVOData.name); 
    
        return {...state, [nameObjectNameInStore]:nameVOData}
      }),
    
      );

 export const regID_Red =  (stat:LoginVO) =>stat.regID;



