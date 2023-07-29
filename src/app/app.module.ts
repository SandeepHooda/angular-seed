import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadDataComponent } from './comp/read-data/read-data.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './comp/read-data/login.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './reducers/login.effect';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './reducers/login.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes = [
  { path: 'home', component: ReadDataComponent },
  { path: '',  redirectTo: '/home',  pathMatch: 'full'},
  { path: '**', component: ReadDataComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ReadDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ myDataStore: loginReducer }),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({
      name : "Sandeep Hooda",
      maxAge: 25, // Retains last 25 states
      
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
    ),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
