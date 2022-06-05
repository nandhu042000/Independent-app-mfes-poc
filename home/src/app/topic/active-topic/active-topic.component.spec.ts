import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTopicComponent } from './active-topic.component';

describe('ActiveTopicComponent', () => {
  let component: ActiveTopicComponent;
  let fixture: ComponentFixture<ActiveTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
