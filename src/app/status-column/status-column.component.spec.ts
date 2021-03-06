import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusColumnComponent } from './status-column.component';

describe('StatusColumnComponent', () => {
  let component: StatusColumnComponent;
  let fixture: ComponentFixture<StatusColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
