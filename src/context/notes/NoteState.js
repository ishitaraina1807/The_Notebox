import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)  => {

    const notesInitial = 
    [
      {
        "_id": "655f27cb64e4c6215b73ce17",
        "user": "6517f15961ea9ff79e23d1db",
        "title": "Jogging",
        "description": "go to the park",
        "tag": "fitness",
        "date": "2023-11-23T10:22:03.099Z",
        "__v": 0
      },
      {
        "_id": "655f27e464e4c6215b73ce19",
        "user": "6517f15961ea9ff79e23d1db",
        "title": "Youtube",
        "description": "Watch redux videos",
        "tag": "studies",
        "date": "2023-11-23T10:22:28.908Z",
        "__v": 0
      },
      {
        "_id": "655f27ff64e4c6215b73ce1b",
        "user": "6517f15961ea9ff79e23d1db",
        "title": "Painting",
        "description": "Buy a canvas and paint something",
        "tag": "Hobbies",
        "date": "2023-11-23T10:22:55.611Z",
        "__v": 0
      },
      {
        "_id": "655f27cb64e4c6215b73ce17",
        "user": "6517f15961ea9ff79e23d1db",
        "title": "Jogging",
        "description": "go to the park",
        "tag": "fitness",
        "date": "2023-11-23T10:22:03.099Z",
        "__v": 0
      },
      {
        "_id": "655f27e464e4c6215b73ce19",
        "user": "6517f15961ea9ff79e23d1db",
        "title": "Youtube",
        "description": "Watch redux videos",
        "tag": "studies",
        "date": "2023-11-23T10:22:28.908Z",
        "__v": 0
      }
    ]
const [notes, setNotes] = useState(notesInitial);

//Add a note function 

const addNote = (title, description, tag) => {
  //todo - api calls 
  console.log("adding a new note")
  const note =   {
    "_id": "655f27e464e4c6215b73ce19",
    "user": "6517f15961ea9ff79e23d1db",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2023-11-23T10:22:28.908Z",
    "__v": 0
  }
setNotes(notes.concat(note))
}

//Delete a note 

const deleteNote = (id) => {

}

//Edit a note

const editNote = (id) => {

}

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;