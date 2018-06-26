import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpressdoxInterviewComponent } from './xpressdox-interview.component';

describe('XpressdoxInterviewComponent', () => {
  let component: XpressdoxInterviewComponent;
  let fixture: ComponentFixture<XpressdoxInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpressdoxInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpressdoxInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
