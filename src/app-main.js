import {LitElement, html} from 'lit';
import './components/navbar/AppNavbar';
import './components/tile-recommendation/AppTileRecommendation';
import './components/button/AppButton';
import './components/tile-track-single/AppTileTrackSingle';
import './components/track-details/AppTrackDetails';
import {mainStyles} from './mainStyles.js';

export class AppMain extends LitElement {
  static get styles() {
    return [mainStyles];
  }
  render() {
    return html`
      <app-navbar></app-navbar>
      <div class="main">
        <div class="main__tracks">
          ${Array.from(Array(4).keys()).map(
            (item, index) => html`
              <app-tile-track-single></app-tile-track-single>
            `
          )}
        </div>
        <div class="main__details">
          <app-track-details></app-track-details>
        </div>
      </div>
    `;
  }
}

window.customElements.define('app-main', AppMain);
