import React from "react";


function Notes(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Notes;