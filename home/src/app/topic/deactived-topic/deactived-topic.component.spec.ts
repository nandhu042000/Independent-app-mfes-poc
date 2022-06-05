import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivedTopicComponent } from './deactived-topic.component';

describe('DeactivedTopicComponent', () => {
  let component: DeactivedTopicComponent;
  let fixture: ComponentFixture<DeactivedTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivedTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivedTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
