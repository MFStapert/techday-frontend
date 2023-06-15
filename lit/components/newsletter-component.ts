import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class NewsletterComponent extends LitElement {

  @property()
  declare subject?: string;

  static styles = css`
    button {
      position: absolute;
      right: 2rem;
      bottom: 2rem;
      padding: 1rem 2rem;
      width: auto;
      height: auto;
      min-height: 3.625rem;
      border: 2px solid #000000;
      border-radius: 0.286rem;
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      color: #000000;
      background: linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.12),rgba(0,0,0,.12)),linear-gradient(#ffffff,#ffffff);
      background-size: 0 0,0 0,auto;
      transition: background-color .1s linear;
    }
    `;

  render() {
    return html`
        <button onclick="alert('You have been subscribed!');">
            Subscribe to our ${this.subject || ''} newsletter
        </button>
    `;
  }
}
