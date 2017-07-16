import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeckComponent } from './hero-deck.component';

describe('HeroDeckComponent', () => {
  let component: HeroDeckComponent;
  let fixture: ComponentFixture<HeroDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
