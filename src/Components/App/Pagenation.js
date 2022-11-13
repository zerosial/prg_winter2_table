import { isConstructor } from "../../checkError.js";
import { INITIAL_PAGES, INITIAL_VIEWS } from "../../constants.js";

export default function Pagenation({ $target, initialState, changePage }) {
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

  const resetSelected = () => {
    const pageButton = document.querySelectorAll(".pageButton");
    const selectedPages = this.pages;
    pageButton[selectedPages - 1].classList.add("selected");
  };

  this.render = async () => {
    const list = await this.state;
    const pagesMax = Math.ceil(list.length / this.views);
    const buttonHtml = new Array(pagesMax)
      .fill()
      .map(
        (_, i) =>
          `<button class="pageButton" data-id="${i + 1}">${i + 1}</button>`
      )
      .join("");

    $target.innerHTML = `
            <button class="arrow" data-id="${INITIAL_PAGES}"><<</button>
                ${buttonHtml}
            <button class="arrow" data-id="${pagesMax}">>></button>`;

    resetSelected();
  };

  $target.addEventListener("click", (e) => {
    if (e.target.dataset.id) {
      changePage(e.target.dataset.id);
    }
  });

  this.render();
}
