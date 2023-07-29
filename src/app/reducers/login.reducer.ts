import { createReducer,  on } from '@ngrx/store';
import {LoginVO}  from '../comp/read-data/LoginVO';
import * as LoginVOActions from '../actions/loginvo.actions';



export interface MyDatLoginaStore {
  loginData: LoginVO ;
  someOtherValue: String ;


}


let init:LoginVO = new LoginVO()
    export const loginReducer = createReducer(
      init,
      on(LoginVOActions.GetLogin, (state) => {
        let vo: any = {};

        vo.emailIDAny = "sonu";
        state = vo;
        
        return state;
      }),
      on(LoginVOActions.GetLoginSuccess, (state, action) => {
       // myDataStore.loginData = action.loginResp;
       state = action.loginResp;
        console.log("login success "+action.loginResp.regID); 
    
        return state
      }),
    
      );

 export const regID_Red =  (stat:LoginVO) =>stat.regID;



