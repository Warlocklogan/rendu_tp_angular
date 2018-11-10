import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      text: 'lorem ipsum',
    },
    {
      title: 'Mon deuxième post',
      text: 'lorem ipsum',
    },
    {
      title: 'Encore un post',
      text: 'lorem ipsum',
    },
  ];

  constructor() {  }
}
