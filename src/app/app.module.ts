import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker'

import { AppComponent } from './app.component';
import { PricesComponent } from './prices/prices.component';
import { TransactionService } from './transaction.service';
import { HttpClientModule }    from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    SearchFormComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguiDatetimePickerModule,
    AppRoutingModule,
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
