import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicwService {
    // userName:any;
    // password:any;
    isUservalid:string="false";

  constructor() {
  }
  session(userName:any,password:any){
    if(userName=='naveen11'&& password=='12345')
    {
      
      sessionStorage.setItem("isUservalid",("true"));

     sessionStorage.getItem("isUservalid");
    }
    else{
      sessionStorage.setItem("isUservalid",this.isUservalid);

      var name=sessionStorage.getItem("isUservalid");
    }

  }
  
       
}
