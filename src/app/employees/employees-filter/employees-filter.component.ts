import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employees-filter',
  templateUrl: './employees-filter.component.html',
  styleUrls: ['./employees-filter.component.scss'],
})
export class EmployeesFilterComponent implements OnInit {
  @Output() searchTerm = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    this.searchTerm.emit(term);
  }
}
