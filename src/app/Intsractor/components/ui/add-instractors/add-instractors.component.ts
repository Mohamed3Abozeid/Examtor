import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InstractorService } from '../../../services/instractor.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-instractors',
  imports: [ReactiveFormsModule],
  templateUrl: './add-instractors.component.html',
  styleUrl: './add-instractors.component.scss',
})
export class AddInstractorsComponent implements OnDestroy {
  private readonly _InstractorService = inject(InstractorService);
  private readonly _router = inject(Router);
  sub!: Subscription;
  addInstractorForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    second_name: new FormControl('', Validators.required),
    gender: new FormControl('m', [Validators.required]),
    birth_date: new FormControl('', Validators.required),
    user_type: new FormControl(2, Validators.required),
    specialized_in: new FormControl('', Validators.required),
    // Optional Fields
    third_name: new FormControl(''),
    fourth_name: new FormControl(''),
    last_name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    is_active: new FormControl(true),
    is_staff: new FormControl(true),
    is_superuser: new FormControl(true),
  });

  isLoading: boolean = false;
  instractorDataError: string = '';

  onSubmit() {
    this.isLoading = true;
    this.instractorDataError = '';
    this.sub = this._InstractorService
      .addInstractors(this.addInstractorForm.value)
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          console.log(data);
          this._router.navigate(['/admin/instractor']);
        },
        error: (error) => {
          this.isLoading = false;
          this.instractorDataError = 'Invalid Data';
          console.error('Error adding instructor:', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
