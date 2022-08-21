import React from "react";
import PrivyNoterItemContent from "./PrivyNoterItemContent";
import PrivyNoterItemAction from "./PrivyNoterItemAction";

function PrivyNoterItem({ id, title, body, createdAt, archived, action }) {
  const onDeleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));

  const onArsipNote = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div className="privy-noter-item">
      <PrivyNoterItemContent
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        action={action}
      />

      <PrivyNoterItemAction
        onDeleteNote={onDeleteNote}
        onArsipNote={onArsipNote}
        id={id}
        archived={archived}
      />
    </div>
  );
}

export default PrivyNoterItem;
