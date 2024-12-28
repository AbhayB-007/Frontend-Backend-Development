import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { SharedService } from '../../MyServices/shared.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-item',
  standalone: false,

  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  orderTodoList: number = 0;
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor(private sharedService: SharedService){}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    new AddTodoComponent(this.sharedService);    
  }
}
