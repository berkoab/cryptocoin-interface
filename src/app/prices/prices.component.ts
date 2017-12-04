import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../transaction.service'
import { Transaction } from '../transaction'
import { SearchParams } from '../searchParams';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  transactions: Transaction[];
  @Input() submitted: boolean;
  @Input() searchParams: SearchParams;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);;
  }
}
