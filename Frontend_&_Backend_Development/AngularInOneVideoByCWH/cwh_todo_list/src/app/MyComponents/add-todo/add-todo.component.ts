import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  standalone: false,
  
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
  
export class AddTodoComponent {
  @Input() newTodo: Todo;

}
