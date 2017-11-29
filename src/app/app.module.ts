import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker'

import { AppComponent } from './app.component';
import { PricesComponent } from './prices/prices.component';
import { TransactionService } from './transaction.service';
import { HttpClientModule }    from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguiDatetimePickerModule,
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
