import {html, LitElement} from 'lit';
import {buttonStyle} from './buttonStyle.js';

export class AppButton extends LitElement {
  static properties = {
    type: {type: String, reflect: true},
    variant: {type: String, reflect: true},
    classes: {},
  };

  static get styles() {
    return [buttonStyle];
  }

  constructor() {
    super();
    this.type = 'button';
    this.variant = 'default';
    this._buttonId = `button-${Math.random().toString(36).substr(2, 10)}`;
  }
  render() {
    return html`
      <div class="button" id="${this._buttonId}">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('app-button', AppButton);
