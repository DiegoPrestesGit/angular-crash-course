import { TestBed } from '@angular/core/testing';

import { GetsTodoServiceService } from './gets-todo.service';

describe('GetsTodoServiceService', () => {
  let service: GetsTodoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsTodoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
