import React, { useContext } from 'react';
import { useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [])
  return (
    <div>
      this is about {a.state.name}
    </div>
  )
}

export default About
