import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/core/services/api.service';
import { ExchangeRate } from '../../exchangeRate';

import '../../../../web-components/wc-exchange-rate';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.sass']
})
export class ExchangeRateComponent implements OnInit {

  public exchangeRateData: ExchangeRate[];
  public displayedColumns: string[] = ['currency', 'saleRate', 'purchaseRate'];

  constructor(private apiService: ApiService) {
    this.apiService.getExchangeRate().subscribe((data) => {
      console.log(data);
      this.exchangeRateData = data.exchangeRate;
    });
  }

  ngOnInit() {
  }
}
