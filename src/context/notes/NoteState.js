import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)  => {

    const notesInitial = 
        [
            {
              "_id": "652284b1e5a532c1c2ab3c73",
              "user": "6517f15961ea9ff79e23d1db",
              "title": "work done",
              "description": "all of the work done",
              "tag": "backend last video ",
              "date": "2023-10-08T10:30:09.315Z",
              "__v": 0
            },
            {
              "_id": "6526b5b930e5c0b95374a71b",
              "user": "6517f15961ea9ff79e23d1db",
              "title": "work done react",
              "description": "all of the work done",
              "tag": "backend last video ",
              "date": "2023-10-11T14:48:25.105Z",
              "__v": 0
            }
          ]
const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;