import React from "react";
import { showFormattedDate } from "../utils";

function PrivyNoterItemContent({ title, body, createdAt }) {
  return (
    <div className="privy-noter-item__content">
      <h3 className="privy-noter-item__title">{title}</h3>
      <p className="privy-noter-item__date">{showFormattedDate(createdAt)}</p>
      <p className="privy-noter-item__body">{body}</p>
    </div>
  );
}

export default PrivyNoterItemContent;
