import React from 'react';

const About = () => {
  return (
    <div className="mx-28">
      <h2 className="text-3xl font-bold mb-4">About NoteBox</h2>
      <p className="mb-4">
        Welcome to NoteBox, your go-to platform for easy note-taking!
        With NoteBox, you can effortlessly manage your notes, whether it's creating new ones, editing existing ones, or deleting them when you no longer need them.
      </p>
      <p className="mb-4">
        <strong>Key Features:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Create new notes and jot down your thoughts.</li>
        <li>Edit notes to keep your information up-to-date.</li>
        <li>Delete notes you no longer need, maintaining a clutter-free environment.</li>
        <li>Your notes are securely saved in the cloud, ensuring access from any device.</li>
      </ul>
      <p>
        Get started today and experience the simplicity and convenience of NoteBox!
      </p>
    </div>
  );
};

export default About;
