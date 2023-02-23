import {css} from 'lit';

export const songDetailsStyle = css`
  :host {
    display: block;
  }

  .song-details {
  }

  .song-details__info-current {
    margin-bottom: calc(var(--space) * 10);
  }

  .song-details__info-current h2,
  h3 {
    color: var(--c-gray-4);
  }

  .song-details__recommendations:not(:last-child) {
    margin-bottom: calc(var(--space) * 10);
  }

  .song-details__recommendations-list {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--space) * 6);
  }

  .song-details__recommendation {
    max-width: calc(var(--space) * 48);
    width: 100%;
  }
`;
