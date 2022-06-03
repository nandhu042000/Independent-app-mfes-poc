import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChipsComponent } from './message-chips.component';

describe('MessageChipsComponent', () => {
  let component: MessageChipsComponent;
  let fixture: ComponentFixture<MessageChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
