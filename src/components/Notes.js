import React, { useContext, useEffect } from 'react';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from "../context/notes/noteContext";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
    }, []); 

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {Array.isArray(notes) && notes.length > 0 ? (
                    notes.map((note) => <NoteItem key={note.id} note={note} />)
                ) : (
                    <p>No notes found</p>
                )}
            </div>
        </>
    );
};

export default Notes;
