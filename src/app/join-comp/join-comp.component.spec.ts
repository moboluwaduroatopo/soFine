import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCompComponent } from './join-comp.component';

describe('JoinCompComponent', () => {
  let component: JoinCompComponent;
  let fixture: ComponentFixture<JoinCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
