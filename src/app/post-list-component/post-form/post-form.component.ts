import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {t} from '@angular/core/src/render3';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.postForm = this.formBuilder.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
      });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const body = this.postForm.get('body').value;
    const newPost: Post = new Post(title, body);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
