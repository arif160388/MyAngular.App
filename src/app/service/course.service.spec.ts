import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Todo } from '../models/todo';

import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let httptestingController: HttpTestingController;
  const dummydata: Todo[] = [
    {
      userId: 1,
      id: 10,
      title: 'illo est ratione doloremque quia maiores aut',
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: 'vero rerum temporibus dolor',
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      title: 'ipsa repellendus fugit nisi',
      completed: true,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });
    service = TestBed.inject(CourseService);
    httptestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return data', () => {
    service.getData().subscribe((res: Todo[]) => {
      expect(res[0].id).toBe(10);
    });
    let url = 'https://jsonplaceholder.typicode.com/todos';
    const req = httptestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummydata);
  });
});
