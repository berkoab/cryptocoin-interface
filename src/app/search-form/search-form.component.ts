import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../searchParams'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchParams: SearchParams;

  currencies = ['USD', 'CHI'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}
  
}
