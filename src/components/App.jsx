import React from "react";
import Notes from "./notes-component";
import notes from "./notes"

function notesComponent(note) {
    return <Notes
        key={note.key}
        title={note.title}
        description={note.description}
    />
}

function App() {
    return (
        <>
            <div>Hello World</div>
            {notes.map(e => notesComponent(e))}
        </>
    );
}

export default App;