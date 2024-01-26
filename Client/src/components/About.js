import React from 'react';

const About = () => {
  return (
    <div className="mx-28">
      <h2 className="text-2xl font-bold my-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-blue-500 to-yellow-500">About NoteBox</h2>
      <p className="mb-4 text-lg">
        Welcome to NoteBox, your go-to platform for easy note-taking!
        With NoteBox, you can effortlessly manage your notes, whether it's creating new ones, editing existing ones, or deleting them when you no longer need them.
      </p>
      <p className="text-2xl my-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-blue-500 to-yellow-500">
        <strong>Key Features:</strong>
      </p>
      <ul className="list-disc text-lg list-inside mb-4">
        <li>Create new notes and jot down your thoughts.</li>
        <li>Edit notes to keep your information up-to-date.</li>
        <li>Delete notes you no longer need, maintaining a clutter-free environment.</li>
        <li>Your notes are securely saved in the cloud, ensuring access from any device.</li>
      </ul>
      <p className='text-xl font-bold'>
        Get started today and experience the simplicity and convenience of NoteBox!
      </p>
    </div>
  );
};

export default About;
