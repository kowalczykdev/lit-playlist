import {html, LitElement} from 'lit';
import {tileTrackSingleStyle} from './tileTrackSingleStyle.js';
import '../button/AppButton';

export class AppTileTrackSingle extends LitElement {
  static get properties() {
    return {
      data: Object,
    };
  }
  static get styles() {
    return [tileTrackSingleStyle];
  }

  render() {
    return html`<div class="tile">
      <div class="tile__buttons">
        <app-button @click=${this._onUpClick}>UP</app-button>
        <app-button @click=${this._onDownClick}>DOWN</app-button>
      </div>
      <div class="tile__info">
        <h3 class="tile__title">${this.data.name}</h3>
        <h4 class="tile__artist">${this.data.artist}</h4>
      </div>
      <app-button class="tile__button-delete" @click=${this._onDeleteClick}
        >DEL</app-button
      >
    </div>`;
  }

  _onUpClick(e) {
    e.stopImmediatePropagation();
    console.log('UP');
    const eventOptions = {
      detail: this.data.songId,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('songMoveUp', eventOptions));
  }

  _onDownClick(e) {
    e.stopImmediatePropagation();
    console.log('DOWN');
    const eventOptions = {
      detail: this.data.songId,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('songMoveDown', eventOptions));
  }

  _onDeleteClick(e) {
    e.stopImmediatePropagation();
    console.log('DEL');
    const eventOptions = {
      detail: this.data.songId,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('songDelete', eventOptions));
  }
}

window.customElements.define('app-tile-track-single', AppTileTrackSingle);
