import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  exportAs: 'courselist',
})
export class CourseListComponent implements OnInit {
  courses: any[] = [
    { id: '101', name: 'angular' },
    { id: '102', name: 'node js' },
    { id: '103', name: 'typescript' },
    { id: '104', name: 'react' },
  ];
  course!: any[];

  changeCourse(name: string) {
    console.log(name);
    this.course = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (name === this.courses[i].name) {
        this.course.push(this.courses[i]);
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
