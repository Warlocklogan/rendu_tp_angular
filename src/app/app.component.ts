import { Component } from '@angular/core';
import { Post } from '../app/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = Array<Post>(
    {
      title: 'Mon premier post',
      content: 'lorem ipsum',
      loveIts: 1,
      created_at: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content: 'lorem ipsum',
      loveIts: -1,
      created_at: new Date(),
    },
    {
      title: 'Encore un post',
      content: 'lorem ipsum',
      loveIts: 0,
      created_at: new Date(),
    }
  );

  constructor() {  }
}
