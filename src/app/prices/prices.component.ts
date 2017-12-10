import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service'
import { Transaction } from '../transaction'
import { SearchParams } from '../searchParams';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],

})
export class PricesComponent implements OnInit {
  @Input() transactions: Transaction[];

  constructor() { }

  ngOnInit() {  }
}
