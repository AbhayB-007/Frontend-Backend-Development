import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { SharedService } from '../../MyServices/shared.service';

@Component({
  selector: 'app-add-todo',
  standalone: false,

  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
  title: string;
  desc: string;
  listCount: number;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @Output() toDeleteAll: EventEmitter<Todo> = new EventEmitter();

  constructor(private sharedService: SharedService) {
    this.updateTodoList();    
  }

  validateForm(event: Event) {
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      this.onSubmit();
      this.updateTodoList();
    }
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
  }

  onSubmit() {
    const todo = {
      sno: ++this.listCount,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

  deleteAll() {
    this.toDeleteAll.emit();
    this.updateTodoList();    
  }

  updateTodoList() {
    const localItem = localStorage.getItem("todos");
    if (localItem != null) {      
      this.sharedService.updateList(JSON.parse(localItem));
    }
    this.sharedService.list$.subscribe((list) => {
      this.listCount = list.length; // Get the count      
    });
  }


}
