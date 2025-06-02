import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomErrorComponent } from '../../custom/custom-error/custom-error.component';
import { CustomBtnComponent } from '../../custom/custom-btn/custom-btn.component';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { tokenData } from '../../../interfaces/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    CustomErrorComponent,
    CustomBtnComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private readonly _AuthService = inject(AuthService);
  private readonly _router = inject(Router);
  isLoading: boolean = false;
  passwordType: boolean = false;
  loginError: boolean = false;
  sub!: Subscription;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  // this To Handle Navigation
  tokenHandle(token: string) {
    localStorage.setItem('token', token);
    let data = jwtDecode<tokenData>(token);
    localStorage.setItem('userId', data.user_id.toString());
    localStorage.setItem('userData', data.user_role.toString());

    if (data.user_role == 'student') {
      this._router.navigate(['student']);
    } else if (data.user_role == 'instructor') {
      this._router.navigate(['instructor']);
    } else if (data.user_role == 'admin') {
      this._router.navigate(['admin']);
    }
  }

  // Handle Login
  loginFun() {
    this.isLoading = true;
    this.loginError = false;
    if (this.loginForm.valid) {
      this.sub = this._AuthService.loginHandle(this.loginForm.value).subscribe({
        next: (data) => {
          this.isLoading = false;
          this.tokenHandle(data.access);
        },
        error: (err) => {
          console.log(err);
          this.loginError = true;
          this.isLoading = false;
        },
      });
    } else {
      this.isLoading = false;
      this.loginError = true;
    }
  }

  //password show and hide
  onPasswordTypeChange() {
    this.passwordType = !this.passwordType;
  }

  // unsubscription the Api
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
