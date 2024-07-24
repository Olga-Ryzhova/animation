import { Collapsible } from "./collaps";

// получаем контейнер из верстки:
const container = document.querySelector(".container");
const collapsBtn = new Collapsible(container);

// отрисовка виджета
collapsBtn.bindToDom();
