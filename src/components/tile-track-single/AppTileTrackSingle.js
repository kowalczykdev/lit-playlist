import {html, LitElement, svg} from 'lit';
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
    const iconArrowUp = svg`<svg class="tile__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" fill="currentColor"/></svg>`;
    const iconArrowDown = svg`<svg class="tile__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" fill="currentColor"/></svg>`;
    const iconDelete = svg`<svg class="tile__icon tile__icon--red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" fill="currentColor"/></svg>`;

    return html`<div class="tile">
      <div class="tile__buttons">
        <app-button @click=${this._onUpClick}>${iconArrowUp}</app-button>
        <app-button @click=${this._onDownClick}>${iconArrowDown}</app-button>
      </div>
      <div class="tile__info">
        <h3 class="tile__title">${this.data.name}</h3>
        <h4 class="tile__artist">${this.data.artist}</h4>
      </div>
      <app-button class="tile__button-delete" @click=${this._onDeleteClick}
        >${iconDelete}</app-button
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
