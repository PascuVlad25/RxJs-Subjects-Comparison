import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { SubjectTile, ObservableTile } from './models';

@Injectable()
export class SubjectsService {
  private subjects: SubjectTile<string>[];

  constructor() {
    this.subjects = this.getDefaultValues();
  }

  getObservableCards(): ObservableTile<string>[] {
    return this.subjects.map((subjectTile) => ({
      name: subjectTile.name,
      color: subjectTile.color,
      observable: subjectTile.subject.asObservable(),
    }));
  }

  update(value: string): void {
    this.subjects.forEach((subjectCard) => subjectCard.subject.next(value));
  }

  complete(): void {
    this.subjects.forEach((subjectCard) => subjectCard.subject.complete());
  }

  reset(): void {
    this.complete();
    this.subjects = this.getDefaultValues();
  }

  private getDefaultValues(): SubjectTile<string>[] {
    return [
      {
        name: 'Subject',
        color: 'orange',
        subject: new Subject<string>(),
      },
      {
        name: 'BehaviorSubject',
        color: 'purple',
        subject: new BehaviorSubject<string>('initial'),
      },
      {
        name: 'ReplaySubject',
        color: 'red',
        subject: new ReplaySubject<string>(2),
      },
      {
        name: 'AsyncSubject',
        color: 'green',
        subject: new AsyncSubject<string>(),
      },
    ];
  }
}
