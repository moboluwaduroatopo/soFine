import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  wait:boolean = false;
  constructor() { }
  submit(form){
    this.wait = true
    setTimeout(()=>{
      alert('Email sent..')
      this.wait = false
    },1000)
  }
  ngOnInit() {
  }

}
