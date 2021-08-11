import { TestBed } from '@angular/core/testing';

import { CostCategoryService } from './cost-category.service';

describe('CostCategoryService', () => {
  let service: CostCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
