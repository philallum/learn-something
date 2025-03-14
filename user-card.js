class UserCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          .card {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 15px;
            width: 250px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          }
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .info {
            display: flex;
            flex-direction: column;
          }
          .name {
            font-size: 18px;
            font-weight: bold;
          }
          .email {
            font-size: 14px;
            color: gray;
          }
        </style>
  
        <div class="card">
          <img src="${this.getAttribute("avatar") || "https://via.placeholder.com/50"}" alt="User">
          <div class="info">
            <span class="name"><slot name="name">User Name</slot></span>
            <span class="email"><slot name="email">user@example.com</slot></span>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("user-card", UserCard);  