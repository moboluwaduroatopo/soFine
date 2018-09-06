import { Component, OnInit } from '@angular/core';
export interface gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['./manage-job.component.css']
})
export class ManageJobComponent implements OnInit {
  genders:gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
