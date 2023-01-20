import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdddataComponent } from '../adddata/adddata.component';
import { DataService } from '../data.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-tabledb',
  templateUrl: './tabledb.component.html',
  styleUrls: ['./tabledb.component.css']
})
export class TabledbComponent implements OnInit{

  displayedColumns=['Snum','Hotel','Arrival','Depature','Types','Guest','Price','Manage'];
  search:any;
  dataSource=new MatTableDataSource();
 
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)paginator !: MatPaginator

  constructor (private ds: DataService, private dialog : MatDialog,){

    
  }
  ngOnInit(): void {
    this.ds.getData().subscribe((x:any)=>{console.log(x);
    this.dataSource=new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;});
  }
  // ngAfterViewInit() {

  // }
  applyFilter(event: any) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator = this.paginator;
    // }
  }
  openDialog(){
    this.dialog.open(AdddataComponent,{
      width:'30%',
      height:'95%',
  })}
  clEdit(item:any){
    
  }
  clDelte(item:any){
    this.dialog.open(DeleteComponent)
  }
}
