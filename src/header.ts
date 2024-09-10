import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-header')
export class MyHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #ff5722;
      color: white;
      position: relative;
    }
  `;

  render() {
    return html`
      <header>
        <h1>My Application Header</h1>
      </header>
    `;
  }
}
