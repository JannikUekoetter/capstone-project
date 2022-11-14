import React from "react";
import styled from "styled-components";
import { useStore } from "../../store/useStore";
import { useRouter } from "next/router";
import NavigationBar from "/components/NagivationBar";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function AddLostItem() {
  const addLostItem = useStore((state) => state.addLostItem);
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);

    const { picture } = data;
    const newLostItem = {
      ...data,
      img: URL.createObjectURL(picture),
      id: Math.random().toString(36).substring(2),
    };
    addLostItem(newLostItem);
    router.push("/searchlost");
  };

  return (
    <>
      <NavigationBar />
      <StyledForm onSubmit={handleClick}>
        <Headline>Lost Something?</Headline>
        <label>
          <SecondHeadline>Tell us more</SecondHeadline>

          <label htmlFor="name">
            <StyledNameInput
              name="name"
              type="text"
              placeholder="What have you found?"
              required
            />
          </label>
          <StyledDescriptionInput
            type="text"
            name="description"
            placeholder="Description"
            rows="15"
            cols="35"
            required
          />
        </label>

        <label htmlFor="location">
          <SecondHeadline>Whats your location?</SecondHeadline>

          <StyledLocationInput
            name="location"
            type="text"
            placeholder="Location"
            required
          />
        </label>
        <label htmlFor="picture"></label>
        <PictureUpload>
          <label htmlFor="picture">
            <FaCloudUploadAlt />
          </label>
          <input
            name="picture"
            type="file"
            id="picture"
            accept="image/png, image/jpeg"
            src="/assets/MrBean.png"
            hidden
          />
        </PictureUpload>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </>
  );
}

const Headline = styled.h1`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

const SecondHeadline = styled.h2`
  all: unset;
  width: 6em;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 1em;
  margin-top: 1em;
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
  margin: 2em auto;
  place-self: center;

  &:hover {
    box-shadow: inset 8em 0 0 0 darkblue;
  }
`;

const StyledDescriptionInput = styled.textarea`
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
  margin-bottom: 2em;
  word-break: break-word;
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
  margin-top: 1em;
`;

const SecondDescriptionHeadline = styled.p`
  all: unset;
  width: 6em;
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

const PictureUpload = styled.div`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  background-image: radial-gradient(
    105.38% 477.9% at 82.97% -65.91%,
    #10c7ec 0%,
    #6d38cd 91.02%
  );
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
  margin-top: 2em;
  margin-bottom: 0.5em;
  cursor: pointer;
  &:hover {
    box-shadow: inset 8em 0 0 0 darkblue;
  }
`;
