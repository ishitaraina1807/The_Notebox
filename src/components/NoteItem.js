import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="p-4">
      <div className="bg-white rounded-md shadow-md p-4">
        <h5 className="text-xl text-black font-bold mb-2">{note.title}</h5>
        <h6 className="text-sm text-gray-500 mb-2">{note.tag}</h6>
        <p className="text-gray-700">{note.description}.</p>
        <div className="flex mt-4">
          <i
            className="fas fa-trash text-red-500 cursor-pointer mr-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fas fa-edit text-blue-500 cursor-pointer"
            onClick={() => updateNote(note)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
