import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)  => {

    const s1 = {
        "name": "Ishita"
    }
    const [state, setNotes] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setNotes({
                "name": "matsumi"
            });
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;