import { Component, OnInit } from '@angular/core';
import { Details } from 'c:/users/user/sofine/src/app/details';
//import { LOGINS} from 'c:/users/user/sofine/src/app/mock-details';
import { DatasetService } from 'c:/users/user/sofine/src/app/dataset.service';



  //import { Detail } from '../details'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datas:Details[];
email="";
password="";
  constructor(private serve:DatasetService) { }
 
  ngOnInit() {
    this.processLogin();

  }
 processLogin() : void {
   this.serve.processLogin()
   .subscribe(data => this.datas = data );
   if(this.email == this.datas[0].email && this.password == this.datas[0].password){
    alert("Welcome " + this.datas[0].fullname)
   }else{
     alert("incorrect email or password")
   }
   
  
 }
}
