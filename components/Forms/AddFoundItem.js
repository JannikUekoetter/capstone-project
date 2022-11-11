import React from "react";
import styled from "styled-components";
import { useStore } from "../../store/useStore";
import { useRouter } from "next/router";
import NavigationBar from "/components/NagivationBar";

export default function AddFoundItem() {
  {
    const addFoundItem = useStore((state) => state.addFoundItem);
    const router = useRouter();

    const handleClick = (event) => {
      event.preventDefault();
      const formdata = new FormData(event.target);
      const data = Object.fromEntries(formdata);
      const newFoundItem = {
        ...data,
        id: Math.random().toString(36).substring(2),
      };
      addFoundItem(newFoundItem);
      router.push("/searchfound");
    };
    return (
      <>
        <NavigationBar />
        <StyledForm onSubmit={handleClick}>
          <Headline>Found Something?</Headline>

          <br />
          <SecondHeadline>Tell us more</SecondHeadline>
          <br />
          <br />
          <br />
          <label htmlFor="name">
            <StyledNameInput
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </label>
          <br />
          <br />
          <StyledDescriptionInput
            type="text"
            name="description"
            placeholder="Description"
            rows="15"
            cols="35"
            required
          />

          <br />
          <label htmlFor="location">
            <br />
            <br />
            <SecondHeadline>Whats your location?</SecondHeadline>
            <br />
            <br />
            <br />
            <StyledLocationInput
              name="location"
              type="text"
              placeholder="Location"
              required
            />
            <br />
          </label>
          <br />
          <br />
          <label htmlFor="picture">
            <SecondHeadline>Upload a Picture</SecondHeadline>
            <br />
            <br />
          </label>
          <input
            name="picture"
            type="file"
            id="picture"
            accept="image/png, image/jpeg"
            src="/assets/MrBean.png"
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      </>
    );
  }
}

const Headline = styled.h1`
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  color: white;
  height: 2em;
  border-radius: 0.2em;
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 2em;
  text-align: center;
`;

const SecondHeadline = styled.h2`
  all: unset;
  width: 2em;
  height: 1.5em;
  font-size: 1.2em;
  color: white;
  border-radius: 0.5em;
  outline: none;
  color: #555fd6;
  background-size: 400%;
  background-position: 0% 0%;
  padding: 0.5em;
`;

const StyledForm = styled.form`
  text-align: center;
  position: relative;
`;

const StyledLocationInput = styled.input`
  all: unset;
  font-size: 0.9em;
  background: linear-gradient(
    99.89deg,
    #ecedf0 9.59%,
    rgba(227, 229, 241, 0.78) 83.75%
  );
  border-radius: 1em;
  padding: 2em;
  line-height: 1.6;
`;

const SubmitButton = styled.button`
  all: unset;
  color: white;
  border-radius: 2em;
  transition: ease-out 0.9s;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.2em;
  text-align: center;
  padding: 0.8em 2.5em;
  margin: 3em auto;
  place-self: center;

  &:hover {
    box-shadow: inset 8em 0 0 0 darkblue;
  }
`;

const StyledDescriptionInput = styled.input`
  all: unset;

  font-size: 0.9em;
  background: linear-gradient(
    99.89deg,
    #ecedf0 9.59%,
    rgba(227, 229, 241, 0.78) 83.75%
  );
  border-radius: 1em;
  padding: 2em;
  line-height: 1.6;
  height: 10em;
`;

const StyledNameInput = styled.input`
  all: unset;
  font-size: 0.9em;
  background: linear-gradient(
    99.89deg,
    #ecedf0 9.59%,
    rgba(227, 229, 241, 0.78) 83.75%
  );
  border-radius: 1em;
  padding: 2em;
  line-height: 1.6;
`;
