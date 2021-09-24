import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component'
import { GetallnotesComponent } from './components/Dashboard/getallnotes/getallnotes.component';

const routes: Routes = [
  

  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'account-recovery',component:AccountRecoveryComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'', redirectTo:"login",pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,
  children:[
     {path:'', redirectTo:"home",pathMatch:'full'},

    {path:'home',component:GetallnotesComponent},
    
  ]
}
 
  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
