import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PostService extends DataService{
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }
}
