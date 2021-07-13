import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostCategoryComponent } from './edit-cost-category.component';

describe('EditCostCategoryComponent', () => {
  let component: EditCostCategoryComponent;
  let fixture: ComponentFixture<EditCostCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCostCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCostCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
