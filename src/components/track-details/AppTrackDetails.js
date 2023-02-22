import {html, LitElement} from 'lit';

import {trackDetailsStyle} from './trackDetailsStyle.js';

export class AppTrackDetails extends LitElement {
  static get styles() {
    return [trackDetailsStyle];
  }

  render() {
    return html`<div class="track-details">
      <div class="track-details__info-current">
        <h1>Song name</h1>
        <h2>Artist</h2>
        <h3>Album</h3>
      </div>
      <div class="track-details__recommendations">
        <p>More from Artist</p>
        <div class="track-details__recommendations-list">
          ${Array.from(Array(4).keys()).map(
              (item, index) => html`
                <app-tile-recommendation></app-tile-recommendation>
              `
          )}
        </div>
      </div>
      <div class="track-details__recommendations">
        <p>More from Album</p>
        <div class="track-details__recommendations-list">
          ${Array.from(Array(4).keys()).map(
            (item, index) => html`
              <app-tile-recommendation></app-tile-recommendation>
            `
          )}
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define('app-track-details', AppTrackDetails);
