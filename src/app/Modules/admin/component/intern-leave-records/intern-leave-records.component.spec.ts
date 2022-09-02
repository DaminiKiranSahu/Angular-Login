import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternLeaveRecordsComponent } from './intern-leave-records.component';

describe('InternLeaveRecordsComponent', () => {
  let component: InternLeaveRecordsComponent;
  let fixture: ComponentFixture<InternLeaveRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternLeaveRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternLeaveRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
