import {Component, OnInit} from '@angular/core';
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  user!: User | null;
  userData: string | null = null;

  ngOnInit() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      this.userData = sessionStorage.getItem('user');
    }
  }

  verifieUserAuth(): boolean {
    if (this.userData == null) {
      return false;
    } else {
      this.user = JSON.parse(this.userData);
      return true;
    }
  }
}
