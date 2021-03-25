import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '@shared/mocks/departments-service';
import { Department } from '../../models/department';

@Component({
  templateUrl: './departments-list-page.component.html',
  styleUrls: ['./departments-list-page.component.scss']
})
export class DepartmentsListPageComponent implements OnInit {

  constructor(private _departmentsService: DepartmentsService) { }

  ngOnInit(): void {
    this._departmentsService.getAll().then((res: Department[]) => {
      this._departments = res;
    });
  }

  private _departments: Department[] = [];
  private _isEditing: boolean = false;

  public get departments() : Department[] {
    return this._departments;
  }

  public get isEditing(): boolean {
    return this._isEditing;
  }

  public startEditing(): void {
    this._isEditing = true;
  }

  public addDepartment(): void {
    this._departments.push({ id: Math.floor(Math.random() * Math.floor(1000)), name: 'Mock', description: 'Mock department'})
  }

  public onItemRemove(index: number) {
    this.removeDepartment(index);
  }

  public removeDepartment(index: number): void {
    this._departments.splice(index, 1);
  }

  public saveDepartments(): void {
    this._departmentsService.save(this._departments).then(res => {
      this._isEditing = false;
    });
  }
}
