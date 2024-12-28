import { Injectable } from '@angular/core';
import { Todo } from '../Todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private list = new BehaviorSubject<Todo[]>([]); // Observable list
  list$ = this.list.asObservable(); // Expose the list as an observable.  

  // Method to update the list
  updateList(newList: Todo[]) {
    this.list.next(newList); // Emit the new list to subscribers.
  }

}
