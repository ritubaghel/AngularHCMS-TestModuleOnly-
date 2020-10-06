import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAppointmentsComponent } from './approve-appointments.component';

describe('ApproveAppointmentsComponent', () => {
  let component: ApproveAppointmentsComponent;
  let fixture: ComponentFixture<ApproveAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
