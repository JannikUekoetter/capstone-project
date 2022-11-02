import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function ContactPage() {
  return (
    <StyledContactArea>
      <h1>Make Contact</h1>
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
        <StyledFormInput
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
          <button>Submit</button>
        </Link>
      </div>
    </StyledContactArea>
  );
}

const StyledContactArea = styled.form`
  text-align: center;
`;

const StyledNameInput = styled.input`
  border-radius: 1em;
`;

const StyledFormInput = styled.textarea`
  border-radius: 1em;
`;
