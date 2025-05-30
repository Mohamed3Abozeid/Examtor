import { Component, inject } from '@angular/core';
import { CustomBtnComponent } from '../../custom/custom-btn/custom-btn.component';
import { CustomErrorComponent } from '../../custom/custom-error/custom-error.component';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forget-new',
  imports: [ReactiveFormsModule, CustomBtnComponent, CustomErrorComponent],
  templateUrl: './forget-new.component.html',
  styleUrl: './forget-new.component.scss',
})
export class ForgetNewComponent {
  passwordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    rePassword: new FormControl(null, [Validators.required]),
  });
  private readonly _router = inject(Router);
  isLoading: boolean = false;
  passwordType: boolean = false;
  passwordType2: boolean = false;

  newPasswordFunc() {
    this.isLoading = true;
    this._router.navigate(['/auth']);
  }

  passwordTogle() {
    this.passwordType = !this.passwordType;
  }
  passwordTogle2() {
    this.passwordType2 = !this.passwordType2;
  }
}
