import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoLIstComponent } from './to-do-list.component';

describe('ToDoLIstComponent', () => {
  let component: ToDoLIstComponent;
  let fixture: ComponentFixture<ToDoLIstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoLIstComponent]
    });
    fixture = TestBed.createComponent(ToDoLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
