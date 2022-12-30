import { TestBed } from '@angular/core/testing';

import { ToolkitTypeService } from './toolkit-type.service';

describe('ToolkitTypeService', () => {
  let service: ToolkitTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolkitTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
