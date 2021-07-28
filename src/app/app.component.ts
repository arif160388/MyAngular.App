import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { CourseService } from './service/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  title = 'unitTest';
  ngOnInit(): void {
    let val = this.courseService.getData().subscribe((response: Todo[]) => {
      console.log(response);
    });
  }
}
