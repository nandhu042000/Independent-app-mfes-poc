import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveWorksheetComponent } from './deactive-worksheet.component';

describe('DeactiveWorksheetComponent', () => {
  let component: DeactiveWorksheetComponent;
  let fixture: ComponentFixture<DeactiveWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactiveWorksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
