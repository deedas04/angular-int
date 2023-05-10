import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employees-filter',
  templateUrl: './employees-filter.component.html',
  styleUrls: ['./employees-filter.component.css'],
})
export class EmployeesFilterComponent implements OnInit {
  @Output() searchTerm = new EventEmitter();
  _searchTerm;
  constructor() {}

  ngOnInit() {}

  onSearch() {
    this.searchTerm.emit(this._searchTerm);
  }
}
