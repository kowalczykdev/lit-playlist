import {css} from 'lit';

export const mainStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  .main {
    height: calc(100% - var(--space) * 14);
    box-sizing: border-box;
    display: grid;
    gap: calc(var(--space) * 6);
    grid-template-columns: 2fr 5fr;
  }

  .main__songs {
    background-color: var(--c-black);
    padding: calc(var(--space) * 4);
    display: flex;
    flex-direction: column;
    gap: calc(var(--space) * 4);
    overflow-y: auto;
  }
`;
