import { createReducer,  on } from '@ngrx/store';
import {LoginVO}  from '../comp/read-data/LoginVO';
import * as LoginVOActions from '../actions/loginvo.actions';



export interface MyDatLoginaStore {
  loginData: LoginVO ;
  nameVO: LoginVO ;
  emailIDAny: String ;


}


let init:LoginVO = new LoginVO()
    export const loginReducer = createReducer(
      {},
      on(LoginVOActions.GetLogin, (state) => {
           
        return state;
      }),
      on(LoginVOActions.GetLoginSuccess, (state, action) => {
        console.log("login success "+action.loginResp.regID); 
    
        return {...state, loginData:action.loginResp}
      }),

      on(LoginVOActions.GetNameSuccess, (state, action) => {
        console.log("name success "+action.nameResp.name); 
    
        return {...state, nameVO:action.nameResp}
      }),
    
      );

 export const regID_Red =  (stat:LoginVO) =>stat.regID;



