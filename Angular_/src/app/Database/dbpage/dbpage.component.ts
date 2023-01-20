import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AdddataComponent } from 'src/app/adddata/adddata.component';
import { MatDialog } from '@angular/material/dialog';
import { EditdataComponent } from 'src/app/editdata/editdata.component';
import { DeleteComponent } from 'src/app/delete/delete.component';
@Component({
  selector: 'app-dbpage',
  templateUrl: './dbpage.component.html',
  styleUrls: ['./dbpage.component.css']
})
export class DbpageComponent implements OnInit {


  search :any =null;
  constructor (private ds: DataService, private dialog : MatDialog,){
    // private dialog:MatDialog
    // private addbu:Router,
    this.ds.getData().subscribe((x)=>{this.search=x; console.log(this.search)});
  }
  ngOnInit(): void {
  }
  // onButton(){
  //     this.addbu.navigate(['adddata']);
  // }
  
  openDialog() {
 this.dialog.open(AdddataComponent,{
width:'30%',
height:'95%',

 });
// this.addbu.navigate(['adddata']);
  }
  clEdit(ite:any){
    console.log(ite);
    this.dialog.open(EditdataComponent,
      {
     width:'30%',
      height:'95%',
      data:ite
     }
       );
  }
  clDelte(Snum:number){
    this.dialog.open(DeleteComponent,
      {
        data:Snum
      });
      // console.log(Snum);
      // this.ds.deletedata(Snum);
      // window.location.reload();

      // this.ds.deletedata(deltevar);
  }

}
