import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObservableTile } from '../../services/models';
import { SubjectsService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCard implements OnInit, OnDestroy {
  observableTiles: ObservableTile<string>[] = [];
  historyOfValues: string[][] = [];
  private subscription = new Subscription();

  public constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.observableTiles = this.subjectsService.getObservableCards();
    this.observableTiles.forEach((tile, index) => {
      this.historyOfValues.push([]);
      const subs = tile.observable.subscribe((value) => {
        this.historyOfValues[index].push(value);
      });
      this.subscription.add(subs);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getHistoryValuesNumber(index: number): number {
    return this.historyOfValues[index]?.length;
  }
}
