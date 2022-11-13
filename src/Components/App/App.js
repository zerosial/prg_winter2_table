import { getItems } from "../../api.js";
import Table from "./Table.js";
import Pagenation from "./Pagenation.js";
import Dropdown from "./Dropdown.js";
import { isConstructor } from "../../checkError.js";
import { INITIAL_DROPDOWN_VALUE } from "../../constants.js";

export default function App({ $target }) {
  isConstructor(new.target);

  $target.innerHTML = `
    <div id="page_title">Grepp Enterprise</div>
    <div class="area" id="dropdown">
        드롭다운을 이 영역에 구현해주세요
    </div>
    <div class="area" id="table">
        <table>
            <thead class="tableHead">
                <tr>
                    <th>name</th>
                    <th>title</th>
                    <th>email</th>
                    <th>role</th>
                </tr>
            </thead>
            <tbody class="tableBody">
            </tbody>
        </table>
    </div>
    <div class="area" id="pagination"></div>`;

  new Dropdown({
    $target: document.querySelector("#dropdown"),
    initialState: INITIAL_DROPDOWN_VALUE,
    changeViews: (values) => {
      pagenation.setViews(values);
      table.setViews(values);
    },
  });

  const table = new Table({
    $target: document.querySelector("#table .tableBody"),
    initialState: getItems(),
  });

  const pagenation = new Pagenation({
    $target: document.querySelector("#pagination"),
    initialState: getItems(),
    changePage: (pages) => {
      pagenation.setPages(pages);
      table.setPages(pages);
    },
  });
}
