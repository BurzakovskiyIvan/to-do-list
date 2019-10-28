import { LitElement, html, property, customElement } from '@polymer/lit-element';

@customElement('wc-exchange-rate')
export class WebComponentsExchangeRate extends LitElement {

  @property( {type: Array}) exchangeRateData = JSON.parse(this.getAttribute('exchangeRateData'));

  render() {
    return html`
      <style>
        .exchangeRateTable {
          margin: 40px auto;
          width: 50%;
          min-width: 380px;
          max-width: 500px;
        }

        .title {
          font-size: 1.1em;
          color: #585858;
          margin-bottom: 20px;
        }

        th, td {
          text-align: center;
          padding: 5px 0;
        }
      </style>

      ${
        this.exchangeRateData ?
          html`
            <table class="exchangeRateTable">
              <caption class="title">National Bank's Exchange Rate (1 UAH)</caption>

              <thead>
                <tr>
                  <th>Currency</td>
                  <th>Purchase Rate</td>
                  <th>Sale Rate</td>
                </tr>
              </thead>

              <tbody>

                ${this.exchangeRateData.map(rate => html`
                  <tr>
                    <td>${rate.ccy}</td>
                    <td>${rate.buy}</td>
                    <td>${rate.sale}</td>
                  </tr>
                `)}

              </tbody>
            </table>`
          : html``
      }`;
  }
}
