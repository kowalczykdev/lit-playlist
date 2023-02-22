import {LitElement, html} from 'lit';
import './components/navbar/AppNavbar';
import './components/tile-recommendation/AppTileRecommendation';
import './components/button/AppButton';
import './components/tile-track-single/AppTileTrackSingle';
import './components/track-details/AppTrackDetails';
import {mainStyles} from './mainStyles.js';
import {BASE_PATH, DEFAULT_ERROR_MESSAGE} from './util/api.js';

export class AppMain extends LitElement {
  static get properties() {
    return {
      _data: {type: Array, state: true},
      _error: {type: String, state: true},
      _selectedTrackId: {type: Number, state: true},
    };
  }
  static get styles() {
    return [mainStyles];
  }

  constructor() {
    super();
    this._data = [];
    this._selectedTrackId = null;
    this._error = null;
    console.log(this._data);
    console.log(this._selectedTrackId);
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchPlaylistData();
  }

  fetchPlaylistData() {
    fetch(`http://${BASE_PATH}/api/playlist/${1}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this._data = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const list =
      this._data.length > 0
        ? html`${this._data.map(
            (item) => html`
              <app-tile-track-single
                .data=${item}
                @click=${() => this._selectTrackId(item.songId)}
              ></app-tile-track-single>
            `
          )}`
        : html`<p>No tracks found.</p>`;

    const details = this._selectedTrackId
      ? html`<app-track-details
          .trackId=${this._selectedTrackId}
        ></app-track-details>`
      : html`<h1>Select a track</h1>`;

    return html`
      <app-navbar></app-navbar>
      <div class="main">
        <div class="main__tracks">${list}</div>
        <div class="main__details">${details}</div>
      </div>
    `;
  }

  _selectTrackId(id) {
    console.log(id)
    this._selectedTrackId = id;
  }
}

window.customElements.define('app-main', AppMain);
