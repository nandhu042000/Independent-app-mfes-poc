import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateHomeworkComponent } from './deactivate-homework.component';

describe('DeactivateHomeworkComponent', () => {
  let component: DeactivateHomeworkComponent;
  let fixture: ComponentFixture<DeactivateHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
