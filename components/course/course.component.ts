import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course',
  template: `
            {{text | summary:10 }}
            <div [class]="isFavorite ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" (click)="flip()"> </div>
            <div [class]="isFavorite ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'"
            (click)="isFavorite=!isFavorite"> </div>
          `
})
export class CourseComponent implements OnInit {
  text = `
  lorem ipsum is simply dummy text of the priting and typeset `;

  isFavorite= false;
  flip() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }


  ngOnInit() {

  }
}
