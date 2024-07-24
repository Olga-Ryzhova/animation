export class Collapsible {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  bindToDom() {
    this.add();
    this.collapsEvent();
  }

  static get markup() {
    return `    
    <div class="collapse-box">
      <button type="button" class="btn">Collapse</button>
      <div class="collapse-text" style="height: 0; opacity: 0;">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente itaque odit in harum, quas temporibus, praesentium illo perferendis possimus beatae blanditiis maiores facere esse, non modi est neque eaque.
      </div>
    </div>
  `;
  }

  add() {
    this.parentEl.insertAdjacentHTML("afterbegin", Collapsible.markup);
  }

  collapsEvent() {
    const btn = this.parentEl.querySelector(".btn");
    const text = this.parentEl.querySelector(".collapse-text");
    btn.addEventListener("click", () => this.onClick(btn, text));
  }

  onClick(btn, element) {
    if (btn.classList.contains("pressed")) {
      btn.classList.remove("pressed");
      element.style.height = "100px";
      element.style.opacity = "1";
    } else {
      btn.classList.add("pressed");
      element.style.height = "0";
      element.style.opacity = "0";
    }
  }
}
