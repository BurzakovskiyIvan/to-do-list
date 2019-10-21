import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private EXCHANGE_RATE_PB_URL = 'https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014';

  constructor(
    private http: HttpClient
  ) { }

  public getExchangeRate(): Observable<any> {
    return this.http.get(this.EXCHANGE_RATE_PB_URL);
  }
}
