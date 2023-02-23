import {html, LitElement} from 'lit';
import {buttonStyle} from './buttonStyle.js';

export class AppButton extends LitElement {
  static properties = {
    type: {type: String, reflect: true},
    variant: {type: String, reflect: true},
  };

  static get styles() {
    return [buttonStyle];
  }

  constructor() {
    super();
    this.type = 'button';
    this.variant = 'default';
  }
  render() {
    return html`
      <div class="button">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('app-button', AppButton);
