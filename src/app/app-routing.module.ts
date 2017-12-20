import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component'
import { PricesComponent } from './prices/prices.component'

const routes: Routes = [
  { path: 'transaction', component: TransactionComponent },
  { path: 'prices', component: PricesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
