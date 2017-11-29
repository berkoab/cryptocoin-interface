import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  date2 = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
  gmtDate = '2015-01-01T00:00:00.000Z';
  myVar='2015-01-01';
  currencies = ['USD', 'CHI'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}
  
}
