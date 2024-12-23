import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  standalone: false,

  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  validateForm(event: Event) {
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      this.onSubmit();
    }
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
  }

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
