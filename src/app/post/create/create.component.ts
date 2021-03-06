import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    // this.postService.create(this.form.value).subscribe((res:any) => {
    //   console.log(res);
    //   console.log('Post Created Successfully!');
    //   this.router.navigateByUrl('post/index');
    // })
    let id = this.postService.latestUserData[this.postService.latestUserData.length-1].id+1
    console.log(id);
    let finalSubmit = this.form.value
    finalSubmit.id = id
    console.log(finalSubmit);
    
    this.postService.latestUserData.push(finalSubmit)
    console.log('POst Created Successfully!');
    this.router.navigateByUrl('post/index')
    
    
  }

}
