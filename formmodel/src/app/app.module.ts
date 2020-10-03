import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleformComponent } from './multipleform/multipleform.component';
import { SubmitdetailsComponent } from './submitdetails/submitdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormserviceService } from './formservice.service';
@NgModule({
  declarations: [
    AppComponent,
    MultipleformComponent,
    SubmitdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
