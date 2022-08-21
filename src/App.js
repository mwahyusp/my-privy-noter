import { useState, useEffect } from "react";
import { getInitialData } from "./utils/index";

import PrivyNoterHeader from "./components/PrivyNoterHeader";
import PrivyNoterBody from "./components/PrivyNoterBody";

function App() {
  const [query, setQuery] = useState("");
  const [cariNotes, setCariNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesActive = (cariNotes || notes).filter((note) => !note.archived);
  const notesArsip = (cariNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setCariNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <div className="privy-noter-app">
      <PrivyNoterHeader search={query} setQuery={setQuery} />
      <PrivyNoterBody
        notesActive={notesActive}
        notesArsip={notesArsip}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
