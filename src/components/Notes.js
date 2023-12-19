import React, { useContext } from 'react'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from "../context/notes/noteContext";


const Notes = () => {
    const context = useContext(noteContext);
    const {notes, addNote} = context;
    return (
        <>
        <AddNote/>
         <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note = {note}/>
            }
            )}
        </div>
        </>
       
    )
}

export default Notes
