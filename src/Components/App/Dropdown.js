import { isConstructor } from "../../checkError.js";

export default function Dropdown({ $target, initialState, changeViews }) {
  isConstructor(new.target);

  this.views = initialState;

  this.setViews = (nextState) => {
    this.views = nextState;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = `
        <select name="views">
            <option value="5" selected>5개씩</option>
            <option value="15">15개씩</option>
        </select>`;
  };

  $target.addEventListener("change", (e) => {
    changeViews(e.target.value);
  });

  this.render();
}
