import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './student-nav.component.html',
  styleUrl: './student-nav.component.scss',
})
export class StudentNavComponent {
  private readonly _Router = inject(Router);
  userType = localStorage.getItem('userData');
  logOut() {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      this._Router.navigate(['auth']);
    }
  }
}
