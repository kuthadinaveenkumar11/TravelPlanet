import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private ds:DataService,@Inject(MAT_DIALOG_DATA) public data:number){

  }
  del(Snum:number){
    console.log(Snum);
    this.ds.deletedata(Snum);
    window.location.reload();
  }
  cancelde(){

  }
}
