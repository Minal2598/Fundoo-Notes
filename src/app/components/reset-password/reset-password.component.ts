import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
       
        
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
// convenience getter for easy access to form fields
get f() { return this.resetpasswordForm.controls; }

}
