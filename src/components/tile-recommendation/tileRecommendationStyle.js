import {css} from 'lit';

export const tileRecommendationStyle = css`
  :host {
    display: block;
  }

  .tile {
    box-sizing: border-box;
    background: var(--c-gray-2);
    border-radius: calc(var(--space) * 2);
    padding: calc(var(--space) * 4);
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .tile:hover {
    background: var(--c-gray-3);
  }

  .tile__cover {
    margin-bottom: calc(var(--space) * 4);
  }

  .tile__title {
    font-weight: var(--fw-bold);
    font-size: 1rem;
    color: var(--c-white);
    margin: 0 0 var(--space);
  }

  .tile__duration {
    color: var(--c-gray-4);
    margin-bottom: calc(var(--space) * 4);
  }

  .tile__button {
    display: block;
    text-align: center;
  }
`;
