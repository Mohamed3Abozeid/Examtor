import { Component } from '@angular/core';
import { InstractorNavBarComponent } from '../../components/ui/instractor-nav-bar/instractor-nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instractor-layout',
  imports: [InstractorNavBarComponent, RouterOutlet],
  templateUrl: './instractor-layout.component.html',
  styleUrl: './instractor-layout.component.scss',
})
export class InstractorLayoutComponent {}
