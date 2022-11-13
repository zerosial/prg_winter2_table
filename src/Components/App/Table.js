import { isConstructor } from "../../checkError.js";
import { INITIAL_PAGES, INITIAL_VIEWS } from "../../constants.js";

export default function Table({ $target, initialState }) {
  isConstructor(new.target);

  this.state = initialState;
  this.pages = INITIAL_PAGES;
  this.views = INITIAL_VIEWS;

  this.setPages = (nextState) => {
    this.pages = nextState;
    this.render();
  };

  this.setViews = (nextState) => {
    this.views = nextState;
    this.pages = INITIAL_PAGES;
    this.render();
  };

  this.render = async () => {
    const list = await this.state;
    const tableHtml = list
      .map(
        (data) => `
                <tr>
                    <td>${data.name}</td>
                    <td>${data.title}</td>
                    <td>${data.email}</td>
                    <td>${data.role}</td>
                </tr>`
      )
      .slice((this.pages - 1) * this.views, this.pages * this.views)
      .join("");

    $target.innerHTML = tableHtml;
  };

  this.render();
}
