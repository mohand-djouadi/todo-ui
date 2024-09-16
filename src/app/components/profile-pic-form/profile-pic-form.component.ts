import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-pic-form',
  templateUrl: './profile-pic-form.component.html',
  styleUrl: './profile-pic-form.component.css'
})
export class ProfilePicFormComponent implements OnInit {
    profilePicForm!: FormGroup;
    imageUrl: string | ArrayBuffer | null = "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg";
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.profilePicForm = this.formBuilder.group({
          picture : ['', Validators.required],
        })
    }

    onFileChanged(event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageUrl = reader.result;
          }
          reader.readAsDataURL(file);
        }
    }

}
