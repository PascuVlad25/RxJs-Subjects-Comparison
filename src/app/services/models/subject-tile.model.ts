import { Subject } from 'rxjs';

export interface SubjectTile<T> {
  name: string;
  color: string;
  subject: Subject<T>;
}
