import {html, LitElement} from 'lit';

import {songDetailsStyle} from './songDetailsStyle.js';
import {BASE_PATH, DEFAULT_ERROR_MESSAGE} from '../../util/api.js';

export class AppSongDetails extends LitElement {
  static get properties() {
    return {
      songId: Number,
      addedSongsIds: Array,
      _data: {type: Object, state: true},
      _dataAlbumRecommendations: {type: Array, state: true},
      _dataArtistRecommendations: {type: Array, state: true},
      _error: {type: String, state: true},
    };
  }
  static get styles() {
    return [songDetailsStyle];
  }

  constructor() {
    super();
    this.songId = null;
    this.addedSongsIds = [];
    this._data = null;
    this._dataAlbumRecommendations = [];
    this._dataArtistRecommendations = [];
  }

  updated(_changedProperties) {
    _changedProperties.forEach((oldValue, newValue) => {
      if (newValue === 'songId') {
        this.fetchSongData(this.songId);
      }
    });
  }

  fetchSongData(songId) {
    const result = fetch(`http://${BASE_PATH}/api/song/${songId}/details`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this._data = data;
        return data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    result.then((r) => {
      Promise.all([
        this.fetchAlbumRecommendationsData(r.albumId),
        this.fetchArtistRecommendationsData(r.artistId),
      ]);
    });
  }
  fetchAlbumRecommendationsData(albumId) {
    return fetch(`http://${BASE_PATH}/api/album/${albumId}/recommendations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this._dataAlbumRecommendations = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  fetchArtistRecommendationsData(artistId) {
    return fetch(`http://${BASE_PATH}/api/artist/${artistId}/recommendations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this._dataArtistRecommendations = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const details = this._data
      ? html`<div class="song-details__info-current">
          <h1>${this._data.name}</h1>
          <h2>${this._data.artist}</h2>
          <h3>${this._data.album} (${this._data.albumYearOfRelease})</h3>
        </div>`
      : html`<h1>Please wait</h1>`;

    const albumRecommendations =
      this._dataAlbumRecommendations.length > 0
        ? html`${this._dataAlbumRecommendations.map(
            (item) => html`
              <app-tile-recommendation
                  class="song-details__recommendation"
                .data=${item}
                .availableToAdd=${!this.addedSongsIds.includes(item.songId)}
              ></app-tile-recommendation>
            `
          )}`
        : html`<p>No data</p>`;
    const artistRecommendations =
      this._dataAlbumRecommendations.length > 0
        ? html`${this._dataArtistRecommendations.map(
            (item) => html`
              <app-tile-recommendation
                  class="song-details__recommendation"
                .data=${item}
                .availableToAdd=${!this.addedSongsIds.includes(item.songId)}
              ></app-tile-recommendation>
            `
          )}`
        : html`<p>No data</p>`;

    return html`<div class="song-details">
      ${details}
      <div class="song-details__recommendations">
        <p>More from Artist</p>
        <div class="song-details__recommendations-list">
          ${artistRecommendations}
        </div>
      </div>
      <div class="song-details__recommendations">
        <p>More from Album</p>
        <div class="song-details__recommendations-list">
          ${albumRecommendations}
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define('app-song-details', AppSongDetails);
