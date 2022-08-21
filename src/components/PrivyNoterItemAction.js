import React from "react";

function PrivyNoterItemAction({ onDeleteNote, onArsipNote, id, archived }) {
  return (
    <div className="privy-noter-item__action">
      <button
        className="privy-noter-item__archive-button"
        onClick={() => onArsipNote(id)}
      >
        {archived ? "Move" : "Archive"}
      </button>
      <button
        className="privy-noter-item__delete-button"
        onClick={() => onDeleteNote(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default PrivyNoterItemAction;
