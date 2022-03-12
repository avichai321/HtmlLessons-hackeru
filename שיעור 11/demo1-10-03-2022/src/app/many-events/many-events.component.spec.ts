import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyEventsComponent } from './many-events.component';

describe('ManyEventsComponent', () => {
  let component: ManyEventsComponent;
  let fixture: ComponentFixture<ManyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
