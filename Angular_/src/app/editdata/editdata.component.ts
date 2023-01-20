import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit{
  add:any;
  Adate:any;
  Ddate:any;
  constructor( private ds:DataService,private Route:Router,@Inject(MAT_DIALOG_DATA)public data:any) { }
  ngOnInit(): void {
    console.log(this.data)
    this.add=new FormGroup({
      Snum : new FormControl(''),  
      Hotel:new FormControl(''),
      Arrival:new FormControl(''),
      Depature:new FormControl(''),
      Types:new FormControl(''),
      Guest :new FormControl(''),
      Price:new FormControl(''),
  
    })

  }
  
  save(){
    console.log(this.add.value)


      let serializedForm = JSON.stringify(this.add.value);
      console.log(serializedForm);
      this.ds.updateData(serializedForm);
      setTimeout(
        function(){ 
        location.reload(); 
        }, 1000);  }
  Cancel(){
    window.location.reload();
  }
 
}
