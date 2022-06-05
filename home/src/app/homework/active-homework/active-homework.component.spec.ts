import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveHomeworkComponent } from './active-homework.component';

describe('ActiveHomeworkComponent', () => {
  let component: ActiveHomeworkComponent;
  let fixture: ComponentFixture<ActiveHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
