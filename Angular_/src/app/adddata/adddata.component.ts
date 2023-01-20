import { Component, OnInit, Inject} from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  cancelorreset:string='';
  addoredit:string='';
  Adate:any;
  Ddate:any;

  constructor( private ds:DataService,private dialog : MatDialog,@Inject(MAT_DIALOG_DATA)public data:any) { }
  add=new FormGroup({
    Snum : new FormControl(''),
    Hotel:new FormControl(''),
    Arrival:new FormControl(''),
    Depature:new FormControl(''),
    Types:new FormControl(''),
    Guest :new FormControl(''),
    Price:new FormControl(''),  })

  ngOnInit(): void {
    if(this.data==null){
      this.addoredit="Add";
      this.cancelorreset="Cancel";
    }else{
      this.addoredit="Update";
      this.cancelorreset="Reset";
    }
    this.Adate=this.data.Arrival.split('T')
    this.Ddate=this.data.Depature.split('T')

    this.add.patchValue({
      Snum : this.data.Snum,
      Hotel:this.data.Hotel,
      Arrival:this.Adate[0],

      Depature:this.Ddate[0],

      Types:this.data.Types,
      Guest:this.data.Guest,
      Price:this.data.Price,

    })
  }

  save(){
    
    console.log(this.add.value)
      // let formObj=this.add.getRawValue();
      // console.log(formObj);

      let serializedForm = JSON.stringify(this.add.value);
      console.log(serializedForm);
        this.ds.postData(serializedForm);
        // window.location.reload();
        setTimeout(
          function(){ 
          location.reload(); 
          }, 2000);
          
            // setTimeout(() => {
            //    this.dialog.closeAll();
            // }, 1000)
          
        
  }
  Cancel(){
this.dialog.closeAll();
  }
}
