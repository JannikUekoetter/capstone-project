import React from "react";
import styled from "styled-components";
import { useStore } from "../../store/useStore";
import { useRouter } from "next/router";

export default function AddLostItem() {
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
    addLostItem(newLostItem);
    router.push("/searchlost");
  };

  return (
    <>
      <StyledForm onSubmit={handleClick}>
        <Headline>Lost Something?</Headline>
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
        <br />
        <br />
        <label htmlFor="location">
          <SecondHeadline>Whats your location?</SecondHeadline>
          <br />
          <br />
          <br />
          <input name="location" type="text" placeholder="Location" required />
        </label>
        <br />
        <br />
        <br />
        <label htmlFor="picture">
          <SecondHeadline>Upload a Picture</SecondHeadline>
        </label>
        <br />
        <br />
        <br />
        <input
          name="picture"
          type="file"
          id="picture"
          accept="image/png, image/jpeg"
          src="/assets/MrBean.png"
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </StyledForm>
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

const Headline = styled.h1`
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  color: white;
  border-radius: 0.5em;
  height: 2em;
  width: 10em;
  margin-left: 0.8em;
  text-align: center;
  background-size: 400%;
  background-position: 0% 0%;
  position: relative;
  font-size: 2em;
`;

const SecondHeadline = styled.h2`
  all: unset;
  width: 2em;
  height: 1.5em;
  font-size: 1.2em;
  color: white;
  border-radius: 0.5em;
  outline: none;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-size: 400%;
  background-position: 0% 0%;
  padding: 0.5em;
`;
