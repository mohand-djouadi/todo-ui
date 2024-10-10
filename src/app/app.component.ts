import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //
  // user!: User | null;
  // userData: string | null = null;
  // isAuthenticated: boolean = false;
  //
  // constructor(private router: Router) {
  // }
  //
  // ngOnInit() {
  //   if (typeof window !== 'undefined' && window.sessionStorage) {
  //     this.userData = sessionStorage.getItem('user');
  //   }
  //   this.isAuthenticated = this.verifieUserAuth();
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.isAuthenticated = this.verifieUserAuth();
  //     }
  //   });
  // }
  //
  // verifieUserAuth(): boolean {
  //   if (this.userData == null) {
  //     return false;
  //   } else {
  //     this.user = JSON.parse(this.userData);
  //     return true;
  //   }
  // }
}
