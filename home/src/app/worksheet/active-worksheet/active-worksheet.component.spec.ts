import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorksheetComponent } from './active-worksheet.component';

describe('ActiveWorksheetComponent', () => {
  let component: ActiveWorksheetComponent;
  let fixture: ComponentFixture<ActiveWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveWorksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
