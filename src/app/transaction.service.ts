import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Transaction } from './transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TransactionService {
  private transactionUrl = 'localhost:8080';
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl)
      .pipe(
        catchError(this.handleError('getTransactions', []))
      );
  }

  getTransactionsByAddress(id: string): Observable<Transaction[]> {
    const url = `${this.transactionUrl}/info/${id}`;
    return this.http.get<Transaction[]>(url)
      .pipe(
        catchError(this.handleError('getTransactions id=${id}', []))
      );
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
