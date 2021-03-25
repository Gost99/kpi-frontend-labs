import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsListPageComponent } from './departments-list-page.component';

describe('DepartmentsListPageComponent', () => {
  let component: DepartmentsListPageComponent;
  let fixture: ComponentFixture<DepartmentsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
