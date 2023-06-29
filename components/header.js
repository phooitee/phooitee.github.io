class HeaderComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            

        </style>
        <img src="image/header_img.JPG" alt="SJK(C) Phooi Tee" class="header-image">
        <header>
            <h1>培智华小资源中心</h1>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', HeaderComponent);