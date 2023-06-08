class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>

        </style>
        <footer>
            <p>版权所有 © 2023 培智华小资源中心.</p>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);