import { Observable } from 'rxjs';

export interface ObservableTile<T> {
  name: string;
  color: string;
  observable: Observable<T>;
}
