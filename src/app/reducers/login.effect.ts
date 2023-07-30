import { Injectable } from '@angular/core';

import * as LoginVOActions from '../actions/loginvo.actions';
import { Actions, createEffect, ofType ,  } from '@ngrx/effects';

import { switchMap, map, catchError,exhaustMap, tap ,mergeMap } from 'rxjs/operators';

import { LoginService } from '../comp/read-data/login.service';


import {LoginVO}  from '../comp/read-data/LoginVO';
import { EMPTY, Observable } from 'rxjs';


@Injectable()
 export class LoginEffects {

 //this.loginService.validateLogin("")

 
 loadLoginVO$=  createEffect(() => this.actions$.pipe(
    ofType(LoginVOActions.GET_LOGIN),

    mergeMap((action) => this.loginService.validateLogin(action['data'] ).pipe(
      tap(action => console.log("hi resposne receive: 1st tap " +action['regID'])),
    )
      .pipe(
        tap(data => console.log("hi resposne receive : 2nd tap " +data['regID'])),
        map(data => (LoginVOActions.GetLoginSuccess({loginResp:data})))
      ))            
 )
);


getNameVO$=  createEffect(() => this.actions$.pipe(
  ofType(LoginVOActions.GET_NAME),

  mergeMap((action) => this.loginService.getName(action['data'] )
    .pipe(
      tap(data => console.log("name resposne receive : tap " +data['name'])),
      map(data => (LoginVOActions.GetNameSuccess({nameResp:data})))
    ))            
)
);


    constructor(private actions$: Actions, private loginService: LoginService) {}
}