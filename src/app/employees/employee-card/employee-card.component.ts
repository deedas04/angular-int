import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}

  randomNumber() {
    let rand = Math.floor(Math.random() * 5);
    console.log('Random:' + rand);
    return rand;
  }
}
