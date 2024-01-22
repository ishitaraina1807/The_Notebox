import React, { useContext, useEffect, useRef, useState } from 'react';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from "../context/notes/noteContext";
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate('/login');
    }
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id: "", etitle: '', edescription: '', etag: '' });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
};
const handleclick = (e) => {
  editNote(note.id, note.etitle, note.edescription, note.etag);
  refClose.current.click();
  console.log(note);
};

  return (
    <>
      <AddNote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">Edit note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="container">
            <div className="mb-3">
                <label htmlFor="etitle" className="form-label text-dark">
                    Title
                </label>
                <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    placeholder="Add a title.."
                    onChange={onChange} // Place the onChange event here
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edescription" className="form-label text-dark">
                    Description
                </label>
                <textarea
                    className="form-control"
                    value={note.edescription}
                    id="edescription"
                    name="edescription"
                    rows="1"
                    onChange={onChange} // Place the onChange event here
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="etag" className="form-label text-dark">
                    Tag
                </label>
                <textarea
                    className="form-control"
                    value={note.etag}
                    id="etag"
                    name="etag"
                    rows="1"
                    onChange={onChange} // Place the onChange event here
                ></textarea>
            </div>
        </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark" onClick={handleclick}>Update note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => <NoteItem key={note.id} updateNote={updateNote} note={note} />)
        ) : (
          <p className='mx-1'>No notes found</p>
        )}
      </div>
    </>
  );
};

export default Notes;
