import React, { useContext, useEffect, useRef, useState } from 'react';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login');
    }
    //eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const [note, setNote] = useState({ id: '', etitle: '', edescription: '', etag: '' });

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    // Open the modal
    ref.current.classList.remove('hidden');
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    // Close the modal
    ref.current.classList.add('hidden');
  };

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => <NoteItem key={note.id} updateNote={updateNote} note={note} />)
        ) : (
          <p className="mx-1">No notes found</p>
        )}
      </div>

      {/* Tailwind CSS Modal */}
      <div className="fixed z-10 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true" ref={ref}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                    onChange={onChange}
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
                    rows="3"
                    onChange={onChange}
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
                    onChange={onChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mr-2"
                onClick={handleclick}
              >
                Update note
              </button>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={() => ref.current.classList.add('hidden')}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
