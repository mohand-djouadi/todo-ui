import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password-match.validator';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup-box',
  templateUrl: './signup-box.component.html',
  styleUrl: './signup-box.component.css'
})
export class SignupBoxComponent implements OnInit {
  signUpForm!: FormGroup
  RegEx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  error!: string;

  constructor(private suForm: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signUpForm = this.suForm.group({
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(128), Validators.pattern(this.RegEx)]],
      confirm: ['', [Validators.required, Validators.maxLength(128), passwordMatchValidator]],

    }, {
      validator: passwordMatchValidator
    })
    this.signUpForm.valueChanges.subscribe(() => this.error = this.validateForm())
  }

  validateForm(): string {
    const formValues = this.signUpForm.value
    for (const key of Object.keys(formValues)) {
      if (formValues[key].length === 0) {
        return `${key} is required`;
      }
    }
    if (this.signUpForm.get('email')?.errors?.['email']) return 'email is not valid';
    if (this.signUpForm.get('password')?.errors?.['pattern']) return 'password must contains Capitals numbers and caracteres';
    if (this.signUpForm?.errors?.['passwordMisMatch']) return 'password mis match with confirmation';
    return ''
  }

  onSubmit() {

  }
}
