import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showCourseList: boolean = false;

  message!: string;
  //message = "hello"

  onSubmit() {
    this.showCourseList = true;
  }

  courseReg(cName: string) {
    this.message = `you have successfully registered for ${cName} course`;
  }
}
