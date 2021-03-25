import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentViewPageComponent } from './department-view-page.component';

describe('DepartmentViewPageComponent', () => {
  let component: DepartmentViewPageComponent;
  let fixture: ComponentFixture<DepartmentViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
