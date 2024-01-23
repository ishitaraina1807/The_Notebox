import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: '', description: '', tag: 'default' });

  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: '',
      description: '',
      tag: 'default',
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2 className="text-2xl font-bold">Add a Note</h2>
      <div className="mb-3">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          value={note.title}
          className="mt-1 p-2 w-full border rounded-md"
          id="title"
          name="title"
          placeholder="Add a title.."
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          value={note.description}
          id="description"
          name="description"
          rows="3"
          onChange={onChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
          Tag
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          value={note.tag}
          id="tag"
          name="tag"
          rows="1"
          onChange={onChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-light" onClick={handleclick}>
        Add note
      </button>
    </div>
  );
};

export default AddNote;
