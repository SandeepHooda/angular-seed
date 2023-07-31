import {  createFeatureSelector, createSelector } from '@ngrx/store';
import { MyDatLoginaStore } from '../reducers/app.state';


export const nameSelector = createSelector( 
    createFeatureSelector('myDataStore'),
    (state:MyDatLoginaStore) =>{
      return state?.nameVO?.name;
    }
  )


  export const regIDSelector = createSelector( 
    createFeatureSelector('myDataStore'),
    (state:MyDatLoginaStore) =>{
      return state?.loginData?.regID;
    }
  )