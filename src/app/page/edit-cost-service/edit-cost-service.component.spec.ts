import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostServiceComponent } from './edit-cost-service.component';

describe('EditCostServiceComponent', () => {
  let component: EditCostServiceComponent;
  let fixture: ComponentFixture<EditCostServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCostServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCostServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
