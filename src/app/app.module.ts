import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { UpdateinvoiceComponent } from './updateinvoice/updateinvoice.component';
import { AuthGuard } from './authentication/auth.guard';
import { GetService } from './services/get.service';
import { AuthenticationGuard } from './authentication/authentication.guard';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ViewinvoiceComponent,
    CreateinvoiceComponent,
    UpdateinvoiceComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GetService,AuthenticationGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
