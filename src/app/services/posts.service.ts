import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {Subject} from 'rxjs';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  getOnePost(index: number): Post {
    return this.posts[index];
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndexToRemove,1);
    this.emitPosts();
  }

  addLoveIt(index: number) {
    const postToChange: Post = this.posts[index];
    postToChange.loveIts++;
    this.emitPosts();
  }

  addDontLoveIt(index: number) {
    const postToChange: Post = this.posts[index];
    postToChange.loveIts--;
    this.emitPosts();
  }
}
