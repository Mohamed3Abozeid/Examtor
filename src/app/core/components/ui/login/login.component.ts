import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomErrorComponent } from '../../custom/custom-error/custom-error.component';
import { CustomBtnComponent } from '../../custom/custom-btn/custom-btn.component';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';

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
export class LoginComponent {
  private readonly _AuthService = inject(AuthService);
  isLoading: boolean = false;
  passwordType: boolean = false;
  loginError: boolean = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  loginFun() {
    this.isLoading = true;
    this.loginError = false;
    this._AuthService.loginHandle(this.loginForm.value).subscribe({
      next: (data) => {
        this.isLoading = false;
        // this.decodedToken = this.decode.decodeToken(data.access);
        // console.log(this.decodedToken);
      },
      error: (err) => {
        console.log(err);
        this.loginError = true;
        this.isLoading = false;
      },
    });

    // this._Router.navigate(['/home']);
  }

  onPasswordTypeChange() {
    this.passwordType = !this.passwordType;
  }
}
