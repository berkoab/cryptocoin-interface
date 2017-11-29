import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service'
import { Transaction } from '../transaction'

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);;
  }
}
