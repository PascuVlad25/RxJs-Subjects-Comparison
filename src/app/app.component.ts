import { Component } from '@angular/core';
import { SubjectsService } from './services';

import {
  faPlus,
  faCheck,
  faArrowRotateRight,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [{}];
  inputValue = '';
  addIcon = faPlus;
  completeIcon = faCheck;
  resetIcon = faArrowRotateRight;
  updateIcon = faArrowUp;

  public constructor(private subjectsService: SubjectsService) {}

  addCard(): void {
    this.cards.push({});
  }

  updateSubjects(): void {
    this.subjectsService.update(this.inputValue);
  }

  reset(): void {
    this.cards = [];
    this.subjectsService.reset();
  }

  complete(): void {
    this.subjectsService.complete();
  }
}
