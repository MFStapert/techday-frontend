import { LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';

export class VideoComponent extends LitElement {

  render() {
    return html`
        <iframe id="iframe"
                style="width: calc(100vw - 173px); height: 100vh"
                src="https://www.youtube.com/embed/o-YBDTqX_ZU?autoplay=1&mute=1">
        </iframe>
    `;
  }
}
