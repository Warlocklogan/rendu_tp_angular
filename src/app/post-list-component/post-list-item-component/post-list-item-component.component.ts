import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import {PostsService} from '../../services/posts.service';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() index: number;
  post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.post = this.postsService.getOnePost(this.index);
  }

  addLike(): void {
    this.postsService.addLoveIt(this.index);
  }

  removeLike(): void {
    this.postsService.addDontLoveIt(this.index);
  }

  removePost() {
    this.postsService.removePost(this.post);
  }

}
