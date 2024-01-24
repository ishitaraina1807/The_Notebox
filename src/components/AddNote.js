import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: '', description: '', dueDate: '' });
  

  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.dueDate);
    setNote({
      title: '',
      description: '',
      dueDate: '',
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
     <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-blue-500 to-yellow-500">Add a Note</h1>
      <div className="my-4">
        <label htmlFor="title" className="block text-lg font-medium text-gray-200">
          Title
        </label>
        <input
          type="text"
          value={note.title}
          className="mt-1 p-2 text-black w-full border rounded-md"
          id="title"
          name="title"
          placeholder="Add a title.."
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="block text-lg font-medium text-gray-200">
          Description
        </label>
        <textarea
          className="mt-1 p-2 w-full text-black border rounded-md"
          value={note.description}
          id="description"
          name="description"
          placeholder="Describe your task.."
          rows="3"
          onChange={onChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="block text-lg font-medium text-gray-200">
          Due Date
        </label>
        <textarea
          className="mt-1 p-2 text-black w-full border rounded-md"
          value={note.dueDate}
          id="dueDate"
          name="dueDate"
          placeholder="Task due date.."
          rows="1"
          onChange={onChange}
        ></textarea>
      </div>
      <button type="button" className=" max-w-sm bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-md uppercase font-bold shadow-md rounded-lg mx-auto px-4 py-2" onClick={handleclick}>
        Add note
      </button>
    </div>
  );
};

export default AddNote;