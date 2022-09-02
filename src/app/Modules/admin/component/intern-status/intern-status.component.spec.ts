import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternStatusComponent } from './intern-status.component';

describe('InternStatusComponent', () => {
  let component: InternStatusComponent;
  let fixture: ComponentFixture<InternStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
