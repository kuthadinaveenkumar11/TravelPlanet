import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicwService } from 'src/app/auth-servicw.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Uname:string="";
  // Pssword:string="";

  constructor(private routee:Router,private dd:AuthServicwService){}
  ngOnInit(): void {
  }
  loginform=new FormGroup({
    Uname:new FormControl('naveen11'),
    Pssword: new FormControl('12345'),
  })
  onClick(){
    // this.dd.session(this.loginform.value.Uname,this.loginform.value.Pssword)
    // this.dd.userName=this.loginform.value.Uname;
    // this.dd.password=this.loginform.value.Pssword;

    // if(this.Uname=="naveen11"&&this.Pssword=="12345")
    // {
      if(this.loginform.value.Uname=='naveen11'&&this.loginform.value.Pssword=='12345')
      {
      this.routee.navigate(['tabledb']);
      }
      else{
        console.log(this.loginform.value);
      alert("enter crt");
      }
  }
}
