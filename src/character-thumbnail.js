import styleText from './character-thumbnail.scss';

class CharacterThumbnail extends HTMLElement {
  constructor() {
    super();
    
    this.shadow = this.attachShadow({ mode: 'open' });   
    this.template = document.createElement('template');
    this.styleSheet = new CSSStyleSheet();

    this.render();
  }

  render() {
    this.template.innerHTML = `
      <div class="card">
        <div class="card-image">
          <img src="${this.getAttribute('data-image')}">
        </div>
        <div class="card-content">
          <span class="card-title">${this.getAttribute('data-name')}</span>
        </div>
      </div>`;

    this.styleSheet.replaceSync(styleText);
    this.shadow.adoptedStyleSheets = [this.styleSheet];
    this.shadow.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define('character-thumbnail', CharacterThumbnail);