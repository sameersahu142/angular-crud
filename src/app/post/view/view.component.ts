import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, displayData } from '../post';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // displayDatas: displayData[] = [];


  id!: number;
  post!: displayData;
  // form!: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.displayDatas = this.postService.getAll()
    // console.log(this.displayDatas);

    this.id = this.route.snapshot.params['postId']
    console.log(this.id);

    let viewData = this.postService.latestUserData.filter(item => item.id === Number(this.id))
    console.log(viewData);

    // this.form.controls['id'].patchValue(viewData[0].id)
    // this.form.controls["title"].patchValue(viewData[0].title)
    
    // this.postService.latestUserData.find(this.post)
    this.post = this.postService.latestUserData[this.id-1]
    
    console.log(this.post);
    
    
    // this.post.id = viewData[0].id
  }

}
