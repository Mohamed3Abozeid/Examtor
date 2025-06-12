import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-instractors',
  imports: [ReactiveFormsModule],
  templateUrl: './add-instractors.component.html',
  styleUrl: './add-instractors.component.scss',
})
export class AddInstractorsComponent {
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
    is_staff: new FormControl(false),
    is_superuser: new FormControl(false),
  });

  onSubmit() {
    console.log('add instractors');
  }
}
