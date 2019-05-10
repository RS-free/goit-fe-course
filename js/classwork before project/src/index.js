import "./sass/main.scss";
import Controller from "./js/controller";
import View from "./js/view";
import NotesModel from "./js/model";

// console.log(notes);
const myNotes = new NotesModel();
myNotes.getAllData().then(data => {
  console.log("data", data.length);
  if (data.length > 0) {
    myNotes.notes = data;
    const view = new View();
    view.renderNoteList(view.refs.noteList, myNotes._notes);
    const controller = new Controller(view, myNotes);

    console.log(myNotes);
  }
});