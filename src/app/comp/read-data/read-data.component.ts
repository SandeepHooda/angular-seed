import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginVO } from './LoginVO';
import { Store,  select } from '@ngrx/store';
import * as LoginVOActions from '../../actions/loginvo.actions';
import { Observable } from 'rxjs';
import { nameSelector, regIDSelector } from '../../selector/logion.selectors';
import { MyDatLoginaStore } from '../../reducers/app.state';



@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})

export class ReadDataComponent {
  
   regid$ :Observable<String>;
   name$: Observable<String>;
   aNew: LoginVO=new LoginVO();
  constructor( private loginService : LoginService, private store: Store<{myDataStore: MyDatLoginaStore}>){
   this.name$ =store.select(nameSelector);
 this.regid$ = store.select(regIDSelector);
  }

  ngOnInit() {
    
  }

  getKey(){
    this.store.dispatch(LoginVOActions.GetLogin( "GetLoginInfo-PassedFromComp-DispactEvent"));
  }

  getName(){
    this.store.dispatch(LoginVOActions.GetName( "GetName"));
  }


}


