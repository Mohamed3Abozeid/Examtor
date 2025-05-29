import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-error',
  imports: [],
  templateUrl: './custom-error.component.html',
  styleUrl: './custom-error.component.scss',
})
export class CustomErrorComponent {
  @Input() formName!: FormGroup;
  @Input() inputName!: string;
}
