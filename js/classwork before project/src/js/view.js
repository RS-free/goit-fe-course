"use strict";

import { ICON_TYPES, NOTE_ACTIONS } from "./utils/constants";

export default class Notepad {
  constructor() {
    this.refs = {};
    this.refs.noteList = document.querySelector(".note-list");
  }

  createNoteContent(title, body) {
    const div = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const p = document.createElement("P");

    div.className = "note__content";
    h2.textContent = title;
    h2.className = "note__title";
    p.className = "note__body";
    p.textContent = body;
    div.appendChild(h2);
    div.appendChild(p);

    return div;
  }

  createNoteFooter() {
    const footer = document.createElement("footer");
    const section = document.createElement("section");
    section.className = "note__section";
    const sectionSecond = section.cloneNode(true);
    section.appendChild(
      this.createActionButton(
        NOTE_ACTIONS.DECREASE_PRIORITY,
        ICON_TYPES.ARROW_DOWN
      )
    );
    section.appendChild(
      this.createActionButton(
        NOTE_ACTIONS.INCREASE_PRIORITY,
        ICON_TYPES.ARROW_UP
      )
    );
    sectionSecond.appendChild(
      this.createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT)
    );
    sectionSecond.appendChild(
      this.createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE)
    );
    footer.className = "note__footer";
    footer.appendChild(section);
    footer.appendChild(sectionSecond);

    return footer;
  }

  createActionButton(action, iconText) {
    const button = document.createElement("button");
    const i = document.createElement("i");

    button.className = "action";
    button.dataset.action = action;
    i.className = "material-icons action__icon";
    i.textContent = iconText;
    button.appendChild(i);

    return button;
  }

  createListItem(data = {}) {
    const li = document.createElement("li");
    const div = document.createElement("div");

    li.className = "note-list__item";
    li.dataset.id = data.id;
    div.className = "note";
    div.appendChild(this.createNoteContent(data.title, data.body));
    div.appendChild(this.createNoteFooter());
    li.appendChild(div);

    return li;
  }

  renderNoteList(listRef, notes) {
    listRef.innerHTML = ""; // не додумался как лучше перересовывать
    notes.forEach(el => {
      listRef.append(this.createListItem(el));
    });
  }

  addListItem(listRef, note) {
    listRef.appendChild(note);
  }
}
