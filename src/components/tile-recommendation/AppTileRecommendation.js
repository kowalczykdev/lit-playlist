import {html, LitElement, nothing} from 'lit';
import {tileRecommendationStyle} from './tileRecommendationStyle.js';
import '../button/AppButton';
import {classMap} from 'lit/directives/class-map.js';

export class AppTileRecommendation extends LitElement {
  static get properties() {
    return {
      data: Object,
      availableToAdd: Boolean,
    };
  }
  static get styles() {
    return [tileRecommendationStyle];
  }
  render() {
    const classes = {tile: true, 'tile--available-to-add': this.availableToAdd};

    const button = this.availableToAdd
      ? html`<app-button
          class="tile__button"
          variant="rounded"
          @click=${this._onAddToPlaylistClick}
          >Add to playlist +</app-button
        >`
      : nothing;

    return html`
      <div class=${classMap(classes)}>
        <img
          src="https://picsum.photos/160"
          alt="Song cover"
          class="tile__cover"
        />
        <h3 class="tile__title">${this.data.name}</h3>
        <div class="tile__duration">${this.data.time}</div>
        ${button}
      </div>
    `;
  }

  _onAddToPlaylistClick() {
    console.log('ADD');
    const eventOptions = {
      detail: this.data,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('songAddToPlaylist', eventOptions));
  }
}

window.customElements.define('app-tile-recommendation', AppTileRecommendation);
