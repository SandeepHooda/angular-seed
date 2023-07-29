import { Injectable } from '@angular/core';
import { Action, props } from '@ngrx/store'
import {LoginVO}  from '../comp/read-data/LoginVO';
import { createAction } from '@ngrx/store';
import { provideCloudinaryLoader } from '@angular/common';
import { Observable } from 'rxjs';

export const GET_LOGIN = '[LOGIN] Get data'
export const GET_LOGIN_SUCCESS = '[LOGIN] Success'


export const GetLogin = createAction(GET_LOGIN, props<{data: String}>());
//GetLoginSuccess is an "Action creating function" that we need to call by passing in the optional payload
//props is mgrx function that takes no argument but only takes one generic paramer that is the type of the payload associated with this action
//It should be one object that should have only one peoperty "loginResp" in this case of type "LoginVO"
export const GetLoginSuccess = createAction(GET_LOGIN_SUCCESS, props<{loginResp : LoginVO}>());



//This is how to create an action let's say in our componenets from the function above
//const login: LoginVO = new LoginVO();
//export const GetLoginSuccessAction =  GetLoginSuccess({loginResp : login});


