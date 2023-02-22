import {html, LitElement} from 'lit';
import {tileRecommendationStyle} from './tileRecommendationStyle.js';
import '../button/AppButton';

export class AppTileRecommendation extends LitElement {
  static get styles() {
    return [tileRecommendationStyle];
  }
  render() {
    return html`
      <div class="tile">
        <img
          src="https://picsum.photos/160"
          alt="Song cover"
          class="tile__cover"
        />
        <h3 class="tile__title">Song name</h3>
        <div class="tile__duration">2:59</div>
        <app-button class="tile__button" variant="rounded">Add to playlist +</app-button>
      </div>
    `;
  }
}

window.customElements.define('app-tile-recommendation', AppTileRecommendation);