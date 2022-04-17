import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class SubjectsService {
  simpleSubject = new Subject<string>();
  behaviorSubject = new BehaviorSubject<string>('initial');
  replaySubject = new ReplaySubject<string>(1);

  updateSubjects(value: string): void {
    this.simpleSubject.next(value);
    this.behaviorSubject.next(value);
    this.replaySubject.next(value);
  }

  reset(): void {
    this.simpleSubject = new Subject<string>();
    this.behaviorSubject = new BehaviorSubject<string>('initial');
    this.replaySubject = new ReplaySubject<string>(1);
  }
}
