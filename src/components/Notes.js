import React, { useContext, useEffect, useRef } from 'react';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from "../context/notes/noteContext";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
        //eslint-disable-next-line
    }, []);
    const ref = useRef(null);

    const updateNote = () => {
        ref.current.click(); 
        console.log("Update note function called");
    };
    return (
        <>
            <AddNote />
            <div ref={ref} className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {Array.isArray(notes) && notes.length > 0 ? (
                    notes.map((note) => <NoteItem key={note.id} updateNote={updateNote} note={note} />)
                ) : (
                    <p>No notes found</p>
                )}
            </div>
        </>
    );
};

export default Notes;
