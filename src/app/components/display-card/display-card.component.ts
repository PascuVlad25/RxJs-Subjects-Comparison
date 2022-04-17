import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectsService } from '../../services';

@Component({
  selector: 'display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCard implements OnInit, OnDestroy {
  simpleSubjectValue = 'no-value';
  behaviorSubjectValue = 'no-value';
  replaySubjectValue = 'no-value';

  private subscription = new Subscription();

  public constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.subjectsService.simpleSubject.subscribe((value) => {
        this.simpleSubjectValue = value;
      })
    );

    this.subscription.add(
      this.subjectsService.behaviorSubject.subscribe((value) => {
        this.behaviorSubjectValue = value;
      })
    );

    this.subscription.add(
      this.subjectsService.replaySubject.subscribe((value) => {
        this.replaySubjectValue = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
