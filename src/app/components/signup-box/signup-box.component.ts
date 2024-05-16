import { Component,OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password-match.validator';

@Component({
  selector: 'app-signup-box',
  templateUrl: './signup-box.component.html',
  styleUrl: './signup-box.component.css'
})
export class SignupBoxComponent implements OnInit {
  signUpForm!: FormGroup;
  RegEx: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  constructor(private suForm: FormBuilder) {}

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
    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log('Form is valid:', status === 'VALID');
      if (status === 'INVALID') {
        console.log('Form is invalid. Errors:', this.signUpForm.errors); // Affichez les erreurs de validation dans la console
      } // Imprimez l'état de validation du formulaire dans la console
      const passwordErrors = this.signUpForm.get('password')?.errors;
    console.log('Password errors:', passwordErrors);
    
    const confirmErrors = this.signUpForm.get('confirm')?.errors;
    console.log('Confirm errors:', confirmErrors);
    });
  }
  
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form submitted successfully with values:', this.signUpForm.value);
      // Placez ici le code pour soumettre les données du formulaire à votre backend, etc.
    } else {
      console.log('Form is invalid. Please check your input.');
    }
  }
}
