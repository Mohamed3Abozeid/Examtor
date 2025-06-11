import { Component, inject } from '@angular/core';
import { InstractorService } from '../../../Intsractor/services/instractor.service';
import { Subscription } from 'rxjs';
import { Instructor } from '../../../Intsractor/interfaces/instractor';

@Component({
  selector: 'app-instractor-list',
  imports: [],
  templateUrl: './instractor-list.component.html',
  styleUrl: './instractor-list.component.scss',
})
export class InstractorListComponent {
  private readonly _InstractorService = inject(InstractorService);
  sub!: Subscription;
  instractors!: Instructor[];
  ngOnInit(): void {
    this.getAllInstractors();
  }

  getAllInstractors() {
    this.sub = this._InstractorService.getAllInstractors().subscribe({
      next: (data) => {
        this.instractors = data.results;
        console.log(data);

        console.log(this.instractors);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deletInstractor(instractorsId: number) {
    this._InstractorService.deletInstractors(instractorsId).subscribe({
      next: (data) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
