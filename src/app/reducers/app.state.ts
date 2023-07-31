import { LoginVO } from "../comp/read-data/LoginVO";

export interface MyDatLoginaStore {
    loginData: LoginVO ;
    nameVO: LoginVO ;
    emailIDAny: String ;
  
  
  }
  
  export const loginDataObjectNameInStore : string = 'loginData';
  export const nameObjectNameInStore : string = 'nameVO';