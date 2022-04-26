import { Component, OnInit } from '@angular/core';
import { ObservableTile } from 'src/app/services/models';
import { SubjectsService } from '../../services';

@Component({
  selector: 'display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCard implements OnInit {
  observableTiles: ObservableTile<string>[] = [];

  public constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.observableTiles = this.subjectsService.getObservableCards();
  }
}
