import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNoticeComponent } from './customer-notice.component';

describe('CustomerNoticeComponent', () => {
  let component: CustomerNoticeComponent;
  let fixture: ComponentFixture<CustomerNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
