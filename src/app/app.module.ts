import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyService } from './my.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from './modal/form-dialog/form-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormPagoComponent } from '../app/modal/form-pago/form-pago.component';



@NgModule({
  declarations: [
    AppComponent,
    FormDialogComponent,
    FormPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [MyService, MatDialogModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
