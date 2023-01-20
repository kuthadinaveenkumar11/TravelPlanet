import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login/login.component';
import { EditdataComponent } from './editdata/editdata.component';
import { DbpageComponent } from './Database/dbpage/dbpage.component';
import { AdddataComponent } from './adddata/adddata.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TabledbComponent } from './tabledb/tabledb.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteComponent } from './delete/delete.component';
import {  MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DbpageComponent,
    AdddataComponent,
    EditdataComponent,
    TabledbComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,BrowserAnimationsModule,
    ReactiveFormsModule,MatDialogModule,
    MatSelectModule,MatButtonModule,MatInputModule,
    MatDatepickerModule,MatToolbarModule,MatIconModule,
    MatTableModule,MatPaginatorModule,MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    MatNativeDateModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

