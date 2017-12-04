import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../searchParams';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // finalSearchParams: SearchParams;
  searchParams: SearchParams = new SearchParams;
  submitted: boolean = false;
  currencies = ['USD', 'CHI'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data?:any){
    this.searchParams.address=data.address;
    this.searchParams.currency=data.currency;
    this.submitted=true;
  }

  storeFromDate(val) {
    this.searchParams.fromDate=val;
  }
  
  storeToDate(val) {
    this.searchParams.toDate=val;
  }
}
