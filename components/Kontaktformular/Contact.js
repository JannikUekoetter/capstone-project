import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function ContactPage() {
  return (
    <StyledContactArea>
      <Headline>Make Contact</Headline>
      <label htmlFor="name">
        <StyledNameInput
          name="name"
          placeholder="Your Name"
          required
        ></StyledNameInput>
      </label>
      <br />
      <br />
      <label htmlFor="message">
        <StyledDescriptionInput
          placeholder="What's on your mind?"
          rows="15"
          cols="35"
          required
        />
      </label>
      <br />
      <br />
      <div>
        <Link href="/success">
          <SubmitButton>Submit</SubmitButton>
        </Link>
      </div>
    </StyledContactArea>
  );
}

const StyledContactArea = styled.form`
  text-align: center;
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
  margin-left: 3.8em;
  text-align: center;
  background-size: 400%;
  background-position: 0% 0%;
  position: relative;
  font-size: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
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
  margin-bottom: 2em;
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
