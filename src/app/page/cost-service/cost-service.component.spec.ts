import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostServiceComponent } from './cost-service.component';

describe('CostServiceComponent', () => {
  let component: CostServiceComponent;
  let fixture: ComponentFixture<CostServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
