import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  accountrecoveryForm!: FormGroup 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this. accountrecoveryForm = this.formBuilder.group({
       
        
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
// convenience getter for easy access to form fields
get f() { return this. accountrecoveryForm.controls; }


}
