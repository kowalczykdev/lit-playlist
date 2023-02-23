import {css} from 'lit';

export const trackDetailsStyle = css`
  :host {
    display: block;
  }

  .track-details {
  }

  .track-details__info-current {
    margin-bottom: calc(var(--space) * 10);
  }

  .track-details__info-current h2,
  h3 {
    color: var(--c-gray-4);
  }

  .track-details__recommendations:not(:last-child) {
    margin-bottom: calc(var(--space) * 10);
  }

  .track-details__recommendations-list {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--space) * 6);
  }

  .track-details__recommendation {
    max-width: calc(var(--space) * 48);
    width: 100%;
  }
`;
