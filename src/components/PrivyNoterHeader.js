import React from "react";
import Input from "./Input";

function PrivyNoterHeader({ search, setQuery }) {
  return (
    <div className="privy-noter-app__header">
      <h1>Privy Noter</h1>
      <div className="privy-noter-search">
        <Input
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Search notes ..."
        />
      </div>
    </div>
  );
}

export default PrivyNoterHeader;
