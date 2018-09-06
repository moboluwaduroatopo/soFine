import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // cards = [  
  //   { title: 'Beta 1', cols: 2, rows: 1 },  
  //   { title: 'Beta 2', cols: 1, rows: 1 },  
  //   { title: 'Beta 3', cols: 1, rows: 2 },  
  //   { title: 'Beta 4', cols: 1, rows: 1 }  
  // ];  
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
