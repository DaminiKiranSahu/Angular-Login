import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingAddComponent } from './working-add.component';

describe('WorkingAddComponent', () => {
  let component: WorkingAddComponent;
  let fixture: ComponentFixture<WorkingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
