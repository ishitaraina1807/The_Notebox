import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all notes 
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxN2YxNTk2MWVhOWZmNzllMjNkMWRiIn0sImlhdCI6MTY5NjE1NTU1Mn0.pdilUq_bQBcMcMMpbnkNDhUJjAaMQki5FHk5XPHB-4U",
        },
      });
      if (response.ok) {
        const json = await response.json();
        setNotes(json);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add a note function 
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxN2YxNTk2MWVhOWZmNzllMjNkMWRiIn0sImlhdCI6MTY5NjE1NTU1Mn0.pdilUq_bQBcMcMMpbnkNDhUJjAaMQki5FHk5XPHB-4U",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (response.ok) {
        const newNote = await response.json();
        setNotes([...notes, newNote]);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a note 
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxN2YxNTk2MWVhOWZmNzllMjNkMWRiIn0sImlhdCI6MTY5NjE1NTU1Mn0.pdilUq_bQBcMcMMpbnkNDhUJjAaMQki5FHk5XPHB-4U",
      },
    });
    const json = response.json();
    console.log(json);
    
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxN2YxNTk2MWVhOWZmNzllMjNkMWRiIn0sImlhdCI6MTY5NjE1NTU1Mn0.pdilUq_bQBcMcMMpbnkNDhUJjAaMQki5FHk5XPHB-4U",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (response.ok) {
        const updatedNote = await response.json();
        const updatedNotes = notes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        );
        setNotes(updatedNotes);
      }
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
