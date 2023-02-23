import {css} from 'lit';

export const buttonStyle = css`
  :host {
    display: inline-block;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-size: 0.8rem;
  }

  :host([variant='default']) {
    border-radius: var(--space);
    background-color: var(--c-gray-4);
    color: var(--c-dark);
    padding: var(--space);
  }

  :host([variant='default']:hover) {
    background-color: var(--c-gray-3);
    color: var(--c-white);
  }

  :host([variant='rounded']) {
    border-radius: calc(var(--space) * 4);
    background-color: var(--c-green-1);
    color: var(--c-white);
    padding: calc(var(--space) * 2) calc(var(--space) * 4);
  }

  :host([variant='rounded']:hover) {
    background-color: var(--c-green-2);
  }

  .button {
    border: none;
    cursor: pointer;
    font-weight: var(--fw-bold);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
