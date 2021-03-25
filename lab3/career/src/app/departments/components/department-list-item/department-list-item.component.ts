import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from '../../models/department';

@Component({
  selector: 'career-department-list-item',
  templateUrl: './department-list-item.component.html',
  styleUrls: ['./department-list-item.component.scss']
})
export class DepartmentListItemComponent implements OnInit {

  @Input() public department: Department;
  @Input() public editable: boolean;

  @Output() public buttonRemoveEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public removeThis(): void {
    this.buttonRemoveEvent.emit();
  }

}
