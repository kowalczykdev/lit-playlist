import {LitElement, html} from 'lit';
import './components/navbar/AppNavbar';
import './components/tile-recommendation/AppTileRecommendation';
import './components/button/AppButton';
import './components/tile-track-single/AppTileTrackSingle';
import './components/track-details/AppTrackDetails';
import {mainStyles} from './mainStyles.js';
import {BASE_PATH, DEFAULT_ERROR_MESSAGE} from './util/api.js';
import {moveElement} from './util/util.js';

export class AppMain extends LitElement {
  static get properties() {
    return {
      _data: {type: Array, state: true},
      _selectedTrackId: {type: String, state: true},
      _addedTracksIds: {type: Array, state: true},
    };
  }
  static get styles() {
    return [mainStyles];
  }

  constructor() {
    super();
    this._data = [];
    this._selectedTrackId = null;
    this._addedTracksIds = [];
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
        this._addedTracksIds = data.map((song) => song.songId);
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
                @songMoveUp=${this._songMoveUpListener}
                @songMoveDown=${this._songMoveDownListener}
                @songDelete=${this._songDeleteListener}
              ></app-tile-track-single>
            `
          )}`
        : html`<p>No tracks found.</p>`;

    const details = this._selectedTrackId
      ? html`<app-track-details
          .trackId=${this._selectedTrackId}
          .addedTracksIds=${this._addedTracksIds}
          @songAddToPlaylist=${this._songAddToPlaylistListener}
        ></app-track-details>`
      : html`<h1>Select a track</h1>`;

    return html`
      <app-navbar></app-navbar>
      <div class="main">
        <div class="main__tracks">${list}</div>
        <div>${details}</div>
      </div>
    `;
  }

  _selectTrackId(id) {
    this._selectedTrackId = id;
  }

  _songMoveUpListener(e) {
    const index = this._data.findIndex((song) => song.songId === e.detail);
    if (index === 0) {
      return;
    }
    this._data = moveElement(this._data, index, index - 1);
  }

  _songMoveDownListener(e) {
    const index = this._data.findIndex((song) => song.songId === e.detail);
    if (index === this._data.length - 1) {
      return;
    }
    this._data = moveElement(this._data, index, index + 1);
  }

  _songDeleteListener(e) {
    this._data = this._data.filter((song) => song.songId !== e.detail);
  }

  _songAddToPlaylistListener(e) {
    console.log(e.detail);
    if (this._data.indexOf(e.detail) !== -1) {
      console.log('ALREADY IN QUEUE');
      return;
    }
    this._data = [...this._data, e.detail];
    this._updateIDs();
  }

  _updateIDs() {
    console.log('UPDATED IDs');
    this._addedTracksIds = this._data.map((song) => song.songId);
    console.log(this._addedTracksIds)
  }
}

window.customElements.define('app-main', AppMain);
