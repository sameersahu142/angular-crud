import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post, displayData } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [];
  displayDatas: displayData[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.displayDatas = this.postService.getAll()
    console.log(this.displayDatas);
  }

  deletePost(id:number) {
    this.postService.delete(id)
      this.displayDatas = this.displayDatas.filter(item => item.id !== id);
      console.log('Post deleted Successfully!');
    }
  }