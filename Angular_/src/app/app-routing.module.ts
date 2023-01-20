import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './adddata/adddata.component';
import { DbpageComponent } from './Database/dbpage/dbpage.component';
import { EditdataComponent } from './editdata/editdata.component';
import { agGueard } from './gaurd';
import { LoginComponent } from './loginpage/login/login.component';
import { TabledbComponent } from './tabledb/tabledb.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {path:'dbpage',component:DbpageComponent},
  {path:'adddata',component:AdddataComponent},
  {path:'tabledb',component:TabledbComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
