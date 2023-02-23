import {css} from 'lit';

export const tileSongSingleStyle = css`
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
    min-height: calc(var(--space) * 25);
    display: flex;
    cursor: pointer;
  }

  .tile .tile__buttons,
  .tile .tile__button-delete {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .tile:hover {
    background-color: var(--c-gray-3);
  }

  .tile:hover .tile__buttons,
  .tile:hover .tile__button-delete {
    opacity: 1;
  }

  .tile__buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tile__button-delete {
    align-self: flex-start;
    margin-left: auto;
  }

  .tile__info {
    margin: 0 calc(var(--space) * 4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tile__cover {
    margin-bottom: calc(var(--space) * 4);
  }

  .tile__title {
    font-weight: var(--fw-bold);
    font-size: 1.5rem;
    line-height: 1;
    color: var(--c-white);
    margin: 0;
  }

  .tile__artist {
    color: var(--c-gray-4);
    line-height: 1;
    margin: 0;
  }

  .tile__icon {
    width: calc(var(--space) * 4);
    height: calc(var(--space) * 4);
  }

  .tile__icon--red {
    color: var(--c-red);
  }
`;
