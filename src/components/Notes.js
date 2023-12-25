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
     
<button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
