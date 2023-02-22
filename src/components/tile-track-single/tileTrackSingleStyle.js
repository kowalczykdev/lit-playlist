import {css} from 'lit';

export const tileTrackSingleStyle = css`
  :host {
    display: block;
  }

  .tile {
    box-sizing: border-box;
    background: var(--c-gray-2);
    border-radius: calc(var(--space) * 2);
    padding: calc(var(--space) * 4);
    width: 100%;
    height: calc(var(--space) * 30);
    display: flex;
  }

  .tile__buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`;
