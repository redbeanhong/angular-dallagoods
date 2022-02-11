import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinishedComponent } from './customer-finished.component';

describe('CustomerFinishedComponent', () => {
  let component: CustomerFinishedComponent;
  let fixture: ComponentFixture<CustomerFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
