import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(params){
    super(params);
    this.setTitle("Viewing Post");
  }

  async getHtml(){
    return `
      <h1>Posts </h1>
      <p>
        This is the posts page baby.
      </p>

    `;
  }
}
