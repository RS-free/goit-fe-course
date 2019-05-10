import { PRIORITY_TYPES, NOTE_ACTIONS } from "./utils/constants";
import { generateUniqueId } from "./utils/helper";

export default class Controller {
  constructor(view, model) {
    this._view = view;
    this._model = model;
    this.refs = {};
    this.refs.form = document.querySelector(".note-editor");
    this.refs.search = document.querySelector(".search-form input");
    this.refs.submitButton = this.refs.form.querySelector('[type="submit"]');

    this.refs.noteTitle = this.refs.form.querySelector(
      'input[name="note_title"]'
    );
    this.refs.noteBody = this.refs.form.querySelector(
      'textarea[name="note_body"]'
    );
    this.onSubmit = this.onSubmit.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
    this.refs.form.addEventListener("submit", this.onSubmit);
    this._view.refs.noteList.addEventListener(
      "click",
      this.onNoteList.bind(this)
    );
    this.refs.search.addEventListener(
      "input",
      this.filterNotesByQuery.bind(this)
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const body = this.refs.noteBody.value;
    const title = this.refs.noteTitle.value;
    if (!this._model._editMode) {
      console.log(body, title);
      if (title === "" && body === "") {
        return alert("Необходимо заполнить все поля!");
      } else {
        const note = {
          id: generateUniqueId(),
          title,
          body,
          priority: PRIORITY_TYPES.HIGH
        };
        this._model._notes.push(note);
        console.log(this._model._notes);
        this._view.addListItem(
          this._view.refs.noteList,
          this._view.createListItem(note)
        );
        e.target.reset();
      }
    } else {
      const updateNote = {title, body};
      this._model.updateNote(updateNote);
      this.updateNoteContent(this._model._editTodo.id.updateNote);
      console.log('after_upd', this._model.notes);
      this._model.toggleEditMode(null);
      this.refs.noteBody.value = '';
      this.refs.noteTitle.value = '';
      this.refs.submitButton.textContent = 'ADD';
      this._view.renderNoteList(this._view.refs.noteList, this._model.notes);
    }
  }

  onNoteList(e) {
    const button = e.target.closest("BUTTON");
    if (button.nodeName !== "BUTTON") {
      return;
    }
    if (button.dataset.action === NOTE_ACTIONS.DELETE) {
      this.removeListItem(button.closest(".note-list__item"));
    } else if (button.dataset.action === NOTE_ACTIONS.EDIT) {
      this.editNote(button.closest(".note-list__item"));
    }
  }

  editNote(note) {
    const id = note.dataset.id;
    const element = this.findNoteById(id);
    this._model.toggleEditMode(element);
    if (this._model._editMode && element) {
      console.log(this.refs.submitButton);
      this.refs.submitButton.textContent = "Update";
      this.refs.noteTitle.value = element.title;
      this.refs.noteBody.value = element.body;
    }
  }

  removeListItem(note) {
    this.deleteNote(note.dataset.id);
    note.remove();
  }

  filterNotesByPriority(priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадаем с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    return this.notes.filter(el => el.priority === priority);
  }

  filterNotesByQuery(e) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    const query = e.target.value;
    const filtred = this._notes.filter(el => {
      if (
        el.title.toLowerCase().includes(query.toLowerCase()) ||
        el.body.toLowerCase().includes(query.toLowerCase())
      )
        return el;
    });
    this.renderNoteList(this.refs.noteList, filtred);
    return filtred;
  }

  updateNotePriority(id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    let updatedNote;
    this.notes.map(el => {
      if (el.id === id) {
        updatedNote = el;
        updatedNote.priority = priority;
        return updatedNote;
      }
      return el;
    });
    return updatedNote;
  }

  updateNoteContent(id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
    let updatedNote;
    this.notes = this.notes.map(el => {
      if (el.id === id) {
        updatedNote = { ...el, ...updatedContent };
        return updatedNote;
      }
      return el;
    });
    return updatedNote;
  }

  deleteNote(id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    this._model._notes = this._model._notes.filter(el => el.id !== id);
  }

  findNoteById(id) {
    return this._model._notes.find(el => el.id === id);
  }

  saveNote(note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    this.notes.push(note);
    return note;
  }
}
