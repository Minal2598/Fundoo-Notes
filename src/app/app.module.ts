import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/Icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { GetallnotesComponent } from './components/Dashboard/getallnotes/getallnotes.component';

import { DisplayComponent } from './components/Dashboard/display/display.component';
import {MatCardModule} from '@angular/material/card';
import { IconsComponent } from './components/Dashboard/icons/icons/icons.component';
import { UpdatenoteComponent } from './components/UpdateNotes/updatenote/updatenote.component';
import { FormsModule } from '@angular/forms';
import { TakesnoteComponent } from './components/takesnote/takesnote/takesnote.component';
import { AuthguardServiceService } from './services/Authguard/authguard-service.service';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AccountRecoveryComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetallnotesComponent,
  
    DisplayComponent,
    IconsComponent,
    UpdatenoteComponent,
    TakesnoteComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule, 
    FlexLayoutModule ,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule 
    
    

  
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
