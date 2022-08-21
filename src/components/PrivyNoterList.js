import React from "react";
import PrivyNoterItem from "./PrivyNoterItem";

function PrivyNoterList({ notes, label, setNotes }) {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">There is no record.</p>
        ) : (
          notes.map((note) => (
            <PrivyNoterItem action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
}

export default PrivyNoterList;
