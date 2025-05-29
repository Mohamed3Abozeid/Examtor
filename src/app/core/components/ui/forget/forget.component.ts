import { Component } from '@angular/core';
import { ForgetNewComponent } from './forget-new/forget-new.component';
import { ForgetCodeComponent } from './forget-code/forget-code.component';
import { ForgetDataComponent } from './forget-data/forget-data.component';

@Component({
  selector: 'app-forget',
  imports: [ForgetNewComponent, ForgetCodeComponent, ForgetDataComponent],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.scss',
})
export class ForgetComponent {
  userEmail: string = '';
  resetCode: string = '';
  resevEmail(value: string) {
    this.userEmail = value;
  }
  resevCode(value: string) {
    this.resetCode = value;
  }
}
