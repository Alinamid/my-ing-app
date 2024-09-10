import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-footer')
export class MyFooter extends LitElement {
  static styles = css`
    footer {
      padding: 1rem;
      background: #ff5722;
      color: white;
      text-align: center;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </footer>
    `;
  }
}
