import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password-match.validator';
import {User} from "../../core/models/user.model";
import {Router} from "@angular/router";
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

  constructor(
    private suForm: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

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
    const user: User = {
      first_name: this.signUpForm.get('first_name')?.value,
      last_name: this.signUpForm.get('last_name')?.value,
      email: this.signUpForm.get('email')?.value,
      username: this.signUpForm.get('username')?.value,
      password: this.signUpForm.get('password')?.value,
      token: null
    }
    this.http.post<any>('http://127.0.0.1:8000/auth/signup', user).subscribe({
      next: userResponse => {
        sessionStorage.setItem('user', JSON.stringify(userResponse));
        this.router.navigateByUrl('task');
      },
      error: err => {
        this.error = err.message.message;
      }
    })
  }
}
