import { Component } from '@angular/core';
import { SubjectsService } from './services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [{}];
  inputValue = '';

  public constructor(private subjectsService: SubjectsService) {}

  addCard(): void {
    this.cards.push({});
  }

  updateSubjects(): void {
    this.subjectsService.updateSubjects(this.inputValue);
  }

  reset(): void {
    this.cards = [];
    this.subjectsService.reset();
  }
}
