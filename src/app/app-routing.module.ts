import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewinvoiceComponent } from './viewinvoice/viewinvoice.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { UpdateinvoiceComponent } from './updateinvoice/updateinvoice.component';
import { AuthGuard } from './authentication/auth.guard';
import { AuthenticationGuard } from './authentication/authentication.guard';


const routes: Routes = [
    {
      path:'home', component : HomeComponent,
        canActivateChild:[AuthGuard,AuthenticationGuard],
        children:[
          {path:'view-invoice', component : ViewinvoiceComponent,data:['user']},
          {path:'create-invoice', component : CreateinvoiceComponent,data:['admin']},
          {path:'update-invoice', component :  UpdateinvoiceComponent,data:['superadmin']}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ViewinvoiceComponent, CreateinvoiceComponent, UpdateinvoiceComponent ];