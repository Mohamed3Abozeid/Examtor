import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-nav-bar.component.html',
  styleUrl: './admin-nav-bar.component.scss',
})
export class AdminNavBarComponent {
  private readonly _Router = inject(Router);
  userType = localStorage.getItem('userData');
  logOut() {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      this._Router.navigate(['auth']);
    }
  }
}
