import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.css'
})
export class LoginBoxComponent implements OnInit {

  logInForm!: FormGroup;

  constructor(private lgForm: FormBuilder) {}

  ngOnInit(): void {
    this.logInForm = this.lgForm.group({
        username: ['', [Validators.required, Validators.maxLength(50)]],
        password: ['', [Validators.required, Validators.maxLength(128)]]
    })
  }
  onSubmit() {
    
  }
}
