import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function AddLostItem() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLostItem = { description, location };

    fetch("http://localhost:3000/lostsomething", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLostItem),
    }).then(() => {
      console.log("new item added");
      console.log(newLostItem);
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Lost Something?</h1>
        <label>
          <h2>Tell us more</h2>

          <StyledTextarea
            type="text"
            htmlFor="description"
            placeholder="Description"
            rows="15"
            cols="35"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="location">
          <br />
          <h3>Whats your location?</h3>
          <input
            type="text"
            placeholder="Location"
            required
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <br />
        </label>
        <br />
        <label htmlFor="picture">
          <h4>Upload a Picture</h4>
        </label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept="image/png, image/jpeg"
        />

        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </StyledForm>
      <p>{description}</p>
    </>
  );
}

const StyledForm = styled.form`
  text-align: center;
  position: relative;
`;

const StyledTextarea = styled.textarea`
  border-radius: 1em;
`;
