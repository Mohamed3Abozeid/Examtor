import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-instractor-nav-bar',
  imports: [],
  templateUrl: './instractor-nav-bar.component.html',
  styleUrl: './instractor-nav-bar.component.scss',
})
export class InstractorNavBarComponent {
  private readonly _Router = inject(Router);
  userType = localStorage.getItem('userData');
  logOut() {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      this._Router.navigate(['auth']);
    }
  }
}
