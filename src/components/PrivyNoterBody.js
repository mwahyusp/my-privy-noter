import React from "react";
import PrivyNoterInput from "./PrivyNoterInput";
import PrivyNoterList from "./PrivyNoterList";

function PrivyNoterBody({ notesActive, notesArsip, setNotes }) {
  return (
    <div className="privy-noter-app__body">
      <PrivyNoterInput setNotes={setNotes} />
      <PrivyNoterList
        label="Active Notes"
        setNotes={setNotes}
        notes={notesActive}
      />
      <PrivyNoterList label="Archive" setNotes={setNotes} notes={notesArsip} />
    </div>
  );
}

export default PrivyNoterBody;
