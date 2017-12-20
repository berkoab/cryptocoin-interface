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
  @Input() address: String;
  @Input() currency: String;

  constructor() { }

  ngOnInit() {  }

  isOutgoing(direction): boolean {
    return direction=="OUTGOING"
  }
}
