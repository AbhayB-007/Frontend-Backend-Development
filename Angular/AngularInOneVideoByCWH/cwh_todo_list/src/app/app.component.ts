import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh_todo_list';

  //// changing title after 2 secs
  // constructor() {
  //   setTimeout(() => {
  //     this.title = "Changed Title";
  //   }, 2000)
  // }
}
