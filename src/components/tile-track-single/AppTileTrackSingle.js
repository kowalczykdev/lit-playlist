import {html, LitElement} from 'lit';
import {tileTrackSingleStyle} from './tileTrackSingleStyle.js';
import '../button/AppButton';

export class AppTileTrackSingle extends LitElement {
  static get styles() {
    return [tileTrackSingleStyle];
  }

  render() {
    return html`<div class="tile">
      <div class="tile__buttons">
        <app-button>UP</app-button>
        <app-button>DOWN</app-button>
      </div>
      <div class="tile__info">
        <h3 class="tile__title">Song name</h3>
        <h4 class="tile__artist">Artist</h4>
      </div>
      <div class="tile__buttons">
        <app-button>DEL</app-button>
      </div>
    </div>`;
  }
}

window.customElements.define('app-tile-track-single', AppTileTrackSingle);
