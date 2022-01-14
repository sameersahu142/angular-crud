import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, displayData } from '../post';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  post!: displayData;
  form!: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['postId'];
    // console.log(this.id);
    
    // this.postService.find(this.id).subscribe((data: Post) => {
    //   this.post = data;
    //   console.log(this.post);
      
    // });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });

    this.id = this.route.snapshot.params['postId']
    console.log(this.id);

    let editedData = this.postService.latestUserData.filter(item => item.id === Number(this.id))
    console.log(editedData);
    this.form.controls["title"].patchValue(editedData[0].title)
    this.form.controls["body"].patchValue(editedData[0].body)
    console.log(this.form.controls);
    // console.log(this.id);
    // this.postService.find(this.id)
  }

  get f() {
    return this.form.controls;
  }

  // submit() {
  //   console.log(this.form.value);
  //   this.postService.update(this.id, this.form.value).subscribe((res:any) => {
  //     console.log('Post updated successfully!');
  //     this.router.navigateByUrl('post/index');
  //   })
  // }

  submit() {
    console.log(this.form.value);
    console.log(this.id);
    let updatedData = this.postService.latestUserData.filter(item => item.id === Number(this.id))
    console.log(updatedData);

    updatedData[0].title = this.form.value.title
    updatedData[0].body = this.form.value.body

    console.log('Post updated successfully!');
    this.router.navigateByUrl('post/index');
  }
}
