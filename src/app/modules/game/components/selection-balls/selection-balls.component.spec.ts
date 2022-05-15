import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBallsComponent } from './selection-balls.component';

describe('SelectionBallsComponent', () => {
  let component: SelectionBallsComponent;
  let fixture: ComponentFixture<SelectionBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionBallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
