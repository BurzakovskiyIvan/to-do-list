import { LitElement, html, property, customElement } from '@polymer/lit-element';

@customElement('wc-exchange-rate')
export class WebComponentsExchangeRate extends LitElement {

  @property() exchangeRate: [];

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

      <table class="exchangeRateTable">
        <caption class="title">National Bank's Exchange Rate (1 UAH)</caption>

        <thead>
          <tr>
            <th>Currency</td>
            <th>Sale Rate</td>
            <th>Purchase Rate</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>USD</td>
            <td>28.55</td>
            <td>29.33</td>
          </tr>
        </tbody>
      </table>`;
  }
}
