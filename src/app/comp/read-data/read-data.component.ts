import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginVO } from './LoginVO';
import { Store, select } from '@ngrx/store';
import * as LoginVOActions from '../../actions/loginvo.actions';
import { MyDatLoginaStore } from '../../reducers/login.reducer';


@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent {
   regid : String = '';
   name : String = '';
   //loginVO$: Observable<LoginVO>; 
   aNew: LoginVO=new LoginVO();
  constructor( private loginService : LoginService, private store: Store<{myDataStore: MyDatLoginaStore}>){
     store.pipe(select('myDataStore')).subscribe(data => {
      this.regid = data.loginData?.regID;
      this.name = data.nameVO?.name;
     }

     );
  }

  ngOnInit() {
    
  }

  getKey(){
    this.store.dispatch(LoginVOActions.GetLogin({data: "GetLoginInfo-PassedFromComp-DispactEvent"}));
  }

  getName(){
    this.store.dispatch(LoginVOActions.GetName({data: "GetName"}));
  }


}
