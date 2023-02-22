import { css } from 'lit';

export const navbarStyle = css`
  :host {
    display: block;
  }
  
  header {
    box-sizing: border-box;
    background-color: rgba(0,0,0,.5);
    padding: calc(var(--space) * 4);
  }
  
  span {
    font-size: 1.2rem;
    line-height: 1;
    color: var(--c-white);
  }
`
