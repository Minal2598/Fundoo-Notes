import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component'
import { GetallnotesComponent } from './components/Dashboard/getallnotes/getallnotes.component';
 
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { ArchiveComponent } from './components/Archive/archive/archive.component';
import { TrashComponent } from './components/Trash/trash/trash.component';
import { DisplayComponent } from './components/Dashboard/display/display.component';

import { TakesnoteComponent } from './components/takesnote/takesnote/takesnote.component';
import { LabelComponent } from './components/Label/label/label.component';
import { EditlabelComponent } from './components/Editlabel-dialog/editlabel/editlabel.component';

const routes: Routes = [
  {path:'', redirectTo:"login",pathMatch:'full'},

  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'account-recovery',component:AccountRecoveryComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  
  {path:'dashboard',component:DashboardComponent,
  
  children:[
     {path:'', redirectTo:"home",pathMatch:'full'},
     

    {path:'home',component:GetallnotesComponent,canActivate:[AuthenticationGuard]},
    {path:'home',component:GetallnotesComponent},
           {path:'display',component:DisplayComponent},
           {path:'takesnote',component:TakesnoteComponent},
          {path:'archive',component:ArchiveComponent},
          {path:'trash',component:TrashComponent},
          {path:'label',component:LabelComponent},
          {path:'editlabel',component:EditlabelComponent}

    // {path:'dashboard',component: DashboardComponent}
    
  ]
}
 
  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
