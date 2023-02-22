import {html, LitElement} from 'lit';
import {navbarStyle} from './navbarStyle.js';

class AppNavbar extends LitElement {
  static get styles() {
    return [navbarStyle];
  }

  render() {
    return html`<header>
      <span>Lit Playlist</span>
    </header> `;
  }
}

window.customElements.define('app-navbar', AppNavbar);
