import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginVO } from './LoginVO';
import { Store, select } from '@ngrx/store';
import * as LoginVOActions from '../../actions/loginvo.actions';


@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent {
   regid : String = '';
   //loginVO$: Observable<LoginVO>; 
   aNew: LoginVO=new LoginVO();
  constructor( private loginService : LoginService, private store: Store<{myDataStore: LoginVO}>){
     store.pipe(select('myDataStore')).subscribe(data => {
      this.regid = data.regID;
     }

     );
  }

  ngOnInit() {
    
  }

  getData(){

    this.store.dispatch(LoginVOActions.GetLogin({data: "GetLoginInfo-PassedFromComp-DispactEvent"}));


  }


}
