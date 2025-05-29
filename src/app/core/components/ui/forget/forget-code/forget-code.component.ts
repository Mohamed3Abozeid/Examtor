import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CustomBtnComponent } from '../../../custom/custom-btn/custom-btn.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-forget-code',
  imports: [CustomBtnComponent, ReactiveFormsModule],
  templateUrl: './forget-code.component.html',
  styleUrl: './forget-code.component.scss',
})
export class ForgetCodeComponent {
  codeResetForm: FormGroup = new FormGroup({
    code: new FormControl(null, [Validators.required]),
  });
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  @Output() code = new EventEmitter();
  getOtpValues(): string {
    return this.otpInputs
      .toArray()
      .map((input) => input.nativeElement.value)
      .join('');
  }
  private readonly _authService = inject(AuthService);
  isLoading: boolean = false;

  codeResetFunc() {
    this.isLoading = true;
    this.code.emit(this.getOtpValues());

    // this._authService.resetCode('').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  moveNext(event: any, index: number): void {
    const input = event.target;
    input.value = input.value.replace(/\D/g, ''); // Allow only digits

    if (input.value && index < this.otpInputs.length - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }
  }

  movePrev(event: KeyboardEvent, index: number): void {
    if (
      event.key === 'Backspace' &&
      index > 0 &&
      !(<HTMLInputElement>event.target).value
    ) {
      this.otpInputs.toArray()[index - 1].nativeElement.focus();
    }
  }
}
