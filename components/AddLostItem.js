import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { lostItems } from "./Db";
import { useStore } from "../store/useStore";
import { useRouter } from "next/router";

export default function AddLostItem() {
  // const [lost, setLost] = useState(lostItems);

  const addLostItem = useStore((state) => state.addLostItem);
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    const newLostItem = {
      ...data,
      id: Math.random().toString(36).substring(2),
    };
    //setLost((prevLost) => [newLostItem, ...prevLost]);
    addLostItem(newLostItem);
    router.push("/");
  };

  return (
    <>
      <StyledForm onSubmit={handleClick}>
        <h1>Lost Something?</h1>
        <label>
          <h2>Tell us more</h2>
          <label htmlFor="name">
            <input name="name" type="text" placeholder="Name" required />
          </label>
          <br />
          <br />
          <StyledTextarea
            type="text"
            name="description"
            placeholder="Description"
            rows="15"
            cols="35"
            required
          />
        </label>
        <br />
        <label htmlFor="location">
          <br />
          <h3>Whats your location?</h3>
          <input name="location" type="text" placeholder="Location" required />
          <br />
        </label>
        <br />
        <label htmlFor="picture">
          <h4>Upload a Picture</h4>
        </label>
        {/* <input
          name="picture"
          type="file"
          id="picture"
          accept="image/png, image/jpeg"
          onChange={setLost.img}
        /> */}
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </StyledForm>
      {/* <StyledNewItems>
        {lost.map((setLost) => {
          return (
            <div key={setLost.id}>
              <p>Item name:</p>
              {setLost.name}
              <p>Description:</p>
              <p>{setLost.description}</p>
              <StyledImage
                src={setLost.img}
                alt="image"
                objectFit="cover"
                width={200}
                heigth={200}
                layout="fill"
              />
            </div>
          );
        })}
      </StyledNewItems> */}
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
