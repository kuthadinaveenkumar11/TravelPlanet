import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOtions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

getData(){
  return this.http.get("https://localhost:44363/api/wed/GetDetails");
}
 postData(datas:any){
  return this.http.post("https://localhost:44363/api/wed/CreateDetails",datas,this.httpOtions ).subscribe();
 }
 deletedata(mo:number){
  return this.http.delete("https://localhost:44363/api/wed/Deletedata/"+mo,this.httpOtions ).subscribe();
 }
 updateData(data:any){
  return this.http.put("https://localhost:44363/api/wed/Editdetails/",data,this.httpOtions ).subscribe();

 }
}
