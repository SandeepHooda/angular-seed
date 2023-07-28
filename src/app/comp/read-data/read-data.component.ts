import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginVO } from './LoginVO';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent {
   regid : String = '';
  constructor( private loginService : LoginService){}

  ngOnInit() {
    
  }

  getData(){

    let regID: String = "Data";
    this.loginService.validateLogin(regID).subscribe({
      next: (loginVO: LoginVO) =>{
        this.regid = loginVO.regID
      },
      error: ()=>{
        alert("error")
     
       }
   });


  }


}
