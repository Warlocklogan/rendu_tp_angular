import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-component/post-list-item-component/post-list-item-component.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {PostFormComponent} from './post-list-component/post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsService} from './services/posts.service';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponentComponent},
  {path: 'new', component: PostFormComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'},
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    HeaderComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
