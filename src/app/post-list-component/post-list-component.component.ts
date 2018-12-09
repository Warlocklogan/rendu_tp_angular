import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
