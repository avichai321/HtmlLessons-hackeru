import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButton2Component } from './simple-button2.component';

describe('SimpleButton2Component', () => {
  let component: SimpleButton2Component;
  let fixture: ComponentFixture<SimpleButton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleButton2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
