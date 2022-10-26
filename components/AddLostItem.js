import React from "react";

export default function AddLostItem() {
  return (
    <div>
      <h1>Lost Something?</h1>
      <label>
        <textarea placeholder="Description" rows="15" cols="35" />
      </label>
      <br />
      <label>
        <br />
        <input placeholder="Location" />
      </label>
      <br />
      <label>
        <input type="media" placeholder="Add Photo" />
      </label>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </div>
  );
}
