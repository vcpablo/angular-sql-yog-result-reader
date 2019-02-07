import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlInputComponent } from './sql-input.component';

describe('SqlInputComponent', () => {
  let component: SqlInputComponent;
  let fixture: ComponentFixture<SqlInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
