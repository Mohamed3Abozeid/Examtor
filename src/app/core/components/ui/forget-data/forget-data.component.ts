import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CustomErrorComponent } from '../../../components/custom/custom-error/custom-error.component';
import { CustomBtnComponent } from '../../../components/custom/custom-btn/custom-btn.component';
import { AuthService } from '../../../services/auth.service';

import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-forget-data',
  imports: [CustomErrorComponent, CustomBtnComponent, ReactiveFormsModule],
  templateUrl: './forget-data.component.html',
  styleUrl: './forget-data.component.scss',
})
export class ForgetDataComponent {
  forget_form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  private readonly _AuthService = inject(AuthService);
  isLoading: boolean = false;
  @Output() userEmail = new EventEmitter<string>();

  forgetFunc() {
    this.isLoading = true;
    this.userEmail.emit(this.forget_form.value.eamil);
  }
}
