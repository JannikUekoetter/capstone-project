import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function ContactPage() {
  return (
    <StyledContactArea>
      <h1>Make Contact</h1>
      <label htmlFor="name">
        <input name="name" placeholder="Your Name"></input>
      </label>
      <br />
      <br />
      <label htmlFor="message">
        <textarea placeholder="What's on your mind?" rows="15" cols="35" />
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
