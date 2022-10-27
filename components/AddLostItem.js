import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { lostItems } from "./Db";
import { nanoid } from "nanoid";
import Image from "next/image";

export default function AddLostItem() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [lost, setLost] = useState(lostItems);
  const [img, setImage] = useState("/assets/MrBean.png");

  const randomId = nanoid();

  const handleClick = (event) => {
    event.preventDefault();
    const newLostItem = { name, description, location, img, randomId };
    setLost((lostItems) => [...lostItems, newLostItem]);
  };
  return (
    <>
      <StyledForm onSubmit={handleClick}>
        <h1>Lost Something?</h1>
        <label>
          <h2>Tell us more</h2>
          <label htmlFor="name">
            <input
              key="name"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <br />
          <StyledTextarea
            type="text"
            key="description"
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
            key="location"
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
          key="picture"
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
      <StyledNewItems>
        {lost.map((lost) => {
          return (
            <div key={lost.randomId}>
              <p>Item name:</p>
              {lost.name}
              <p>Description:</p>
              <p>{lost.description}</p>
              <StyledImage
                src={lost.img}
                alt="image"
                objectFit="cover"
                width={200}
                heigth={200}
                layout="fill"
                onChange={(event) => setImage(event.target.value)}
              />
            </div>
          );
        })}
      </StyledNewItems>
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

const StyledNewItems = styled.div`
  border-radius: 1em;
  text-align: center;
  position: relative;
`;

const StyledImage = styled.img`
  border-radius: 2em;
  width: 200px;
  height: 200px;
  position: relative;
`;
