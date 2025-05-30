import { Component } from '@angular/core';
import { ForgetCodeComponent } from '../../components/ui/forget-code/forget-code.component';
import { ForgetDataComponent } from '../../components/ui/forget-data/forget-data.component';
import { ForgetNewComponent } from '../../components/ui/forget-new/forget-new.component';

@Component({
  selector: 'app-forget',
  imports: [ForgetCodeComponent, ForgetDataComponent, ForgetNewComponent],
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
