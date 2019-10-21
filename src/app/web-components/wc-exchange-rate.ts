import { LitElement, html } from '@polymer/lit-element';

class WebComponentsExchangeRate extends LitElement {
  _render() {
    return html`
      <style>
        .exchangeRateTable {
          margin: 40px auto
          width: 50%
          min-width: 380px
          max-width: 500px
        }

        .title {
          font-size: 1.1em
          color: #585858
          margin-bottom: 20px
        }

        th, td {
          text-align: center
        }

      </style>

      <h1>Web Components are</h1>`;
  }
}

customElements.define('wc-exchange-rate', WebComponentsExchangeRate);
