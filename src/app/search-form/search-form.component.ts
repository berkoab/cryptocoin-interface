import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../searchParams';
import { TransactionService } from '../transaction.service'
import { Transaction } from '../transaction'
import {CURRENCIES} from '../currencies'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  transactions: Transaction[];
  searchParams: SearchParams = new SearchParams;
  currencies = CURRENCIES;
  selectedCurrency = 'USD';
  
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  onSubmit(data?:any){
    this.searchParams.address=data.address;
    this.searchParams.currency=data.currency;
    this.getTransactionsByAddressAndDates();
  }

  storeFromDate(val) {
    this.searchParams.fromDate=val;
  }
  
  storeToDate(val) {
    this.searchParams.toDate=val;
  }

  getTransactionsByAddressAndDates(): void {
    let sp = this.searchParams;
    this.transactionService.getTransactionsByAddressAndDates(sp.address, sp.fromDate, sp.toDate, sp.currency)
      .subscribe(transactions => this.transactions = transactions);
  }
}
