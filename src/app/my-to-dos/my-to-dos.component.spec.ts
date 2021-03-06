import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToDosComponent } from './my-to-dos.component';

describe('MyToDosComponent', () => {
  let component: MyToDosComponent;
  let fixture: ComponentFixture<MyToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
