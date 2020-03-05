import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getAllPosts } from './post.actions';
import { Post } from './post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}


  ngOnInit() {
    this.postService.loadPosts();
    this.posts$ = this.postService.getPosts();
  }

}
