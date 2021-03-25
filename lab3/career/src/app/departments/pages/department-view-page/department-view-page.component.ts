import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './department-view-page.component.html',
  styleUrls: ['./department-view-page.component.scss']
})
export class DepartmentViewPageComponent implements OnInit {

  public departmentId: number; 

  constructor(private ar: ActivatedRoute) {
    this.departmentId = +this.ar.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
