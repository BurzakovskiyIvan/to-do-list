import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/core/services/api.service';
import { ExchangeRate } from '../../exchangeRate';

import '../../../../web-components/wc-exchange-rate';

@Component({
  selector: 'app-exchange-rate-page',
  templateUrl: './exchange-rate-page.component.html',
  styleUrls: ['./exchange-rate-page.component.sass']
})
export class ExchangeRatePageComponent implements OnInit {

  public exchangeRateData: ExchangeRate[];

  constructor(private apiService: ApiService) {
    this.apiService.getExchangeRate().subscribe((data) => {
      this.exchangeRateData = data;
    });
  }

  ngOnInit() {
  }
}
