import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categorys= [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Language'}
  ];
  constructor() { }

  ngOnInit() {
  }
  log(x) {
    console.log(x);
  }
  submit(course) {
    console.log(course);
  }
}
