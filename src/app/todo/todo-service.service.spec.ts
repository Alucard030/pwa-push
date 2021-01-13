import { TestBed } from '@angular/core/testing';

import { TodoServiceService } from './todo-service.service';

describe('TodoServiceService', () => {
  let service: TodoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add elements',()=>{
    expect(service.onAdd(4)).toBe();
  });

  it('show empty array', ()=>{
    expect(service.showTasks()).toEqual([]);
  })


  it('should show added elements',()=>{
    expect(func(1)).toEqual([1])
  });

  let func=(a)=>{service.onAdd(a); return service.showTasks()};
});

