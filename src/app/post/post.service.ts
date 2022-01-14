import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  public latestUserData = [
    {
      "id": 1,
      "title": "sunt excepturi optio reprehenderit",
      "body": "quia recusandae consequuntur expedita."
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint."
    },
    {
      "id": 3,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisc."
    }
  ]

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (private httpClient: HttpClient) { }

  // getAll(): Observable<any> {
  //   return this.httpClient.get(this.apiURL + '/posts/')
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  getAll() {
    return this.latestUserData
  }

  create(post:Post): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // find(id:number): Observable<any> {
  //   return this.httpClient.get(this.apiURL + '/posts/' + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  find(id:number) {
    return this.latestUserData
  }

  update(id:number, post:Post): Observable<any> {
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number) {
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
