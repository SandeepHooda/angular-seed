import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginVO } from './LoginVO';
import { Store, createFeatureSelector, createSelector, select } from '@ngrx/store';
import * as LoginVOActions from '../../actions/loginvo.actions';
import { MyDatLoginaStore } from '../../reducers/login.reducer';
import {filter} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';


@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})

export class ReadDataComponent {
  
   regid : String = '';
   name : String = '';
  //name$: Observable<String>;
   //loginVO$: Observable<LoginVO>; 
   aNew: LoginVO=new LoginVO();
  constructor( private loginService : LoginService, private store: Store<{myDataStore: MyDatLoginaStore}>){
   //this.name$ =store.select(aSelector);
    //this.name$.subscribe(v => console.log("checking the selector "+v))

     this.store.pipe(select('myDataStore')).subscribe(data => {
      this.regid = data.loginData?.regID;
      this.name = data.nameVO?.name;
     }

     );
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
/*export const aSelector = createSelector( 
  createFeatureSelector('myDataStore'),
  (state:MyDatLoginaStore) =>{
    return state.nameVO.regID;
  }
)*/

