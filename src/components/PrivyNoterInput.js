import { useState } from "react";
import Input from "./Input";

function PrivyNoterInput({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    setNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title: title,
        body: body,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <div className="privy-noter-input">
      <h2>Create a Notes</h2>
      <p className="privy-noter-input__title__char-limit">
        Remaining Characters: {50 - title.length}
      </p>
      <form onSubmit={onSubmitEventHandler}>
        <Input
          value={title}
          onChange={setTitle}
          id="title"
          name="title"
          type="text"
          placeholder="Write the title here ..."
          required
        />
        <Input
          value={body}
          onChange={setBody}
          id="body"
          name="body"
          type="textarea"
          placeholder="Write your notes here ..."
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default PrivyNoterInput;
