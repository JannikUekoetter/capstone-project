import { getItemByDatabaseId } from "../../../services/Db";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import BurgerMenu from "../../../components/BurgerMenu";

export function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}

export function ItemDetail({ id }) {
  const detailItem = getItemByDatabaseId(id);
  if (!detailItem) return <p> loading... </p>;

  return (
    <>
      <BurgerMenu />
      <PageContainer>
        <ItemHeadline>{detailItem.name}</ItemHeadline>
        <br />
        <ItemImage
          objectFit="cover"
          src={detailItem.img}
          width={200}
          heigth={200}
          layout="fill"
          alt="lost items"
        />

        <Description>{detailItem.description}</Description>

        <LocationText>{detailItem.location}</LocationText>

        <Link href="/contact">
          <ContactButton>Contact</ContactButton>
        </Link>
      </PageContainer>
    </>
  );
}

const blueGradient = `radial-gradient(105.38% 477.9% at 82.97% -65.91%, #10C7EC 0%, #6D38CD 91.02%);`;

const PageContainer = styled.main`
  display: grid;
  justify-content: center;
  padding: 0 1em;
  background: linear-gradient(169.6deg, #f0f2f7 11.26%, #eaedf8 86.54%);
`;

const ItemHeadline = styled.h1`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  background: ${blueGradient};
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
`;

const ItemImage = styled.img`
  border-radius: 2em;
  margin: 1em auto;
  height: 15em;
  width: 15em;
`;

const SectionHeadline = styled.h2`
  color: white;
  border-radius: 0.5em;
  transition: ease-out 0.9s;
  background: ${blueGradient};
  background-size: 400%;
  background-position: 0% 0%;
  font-size: 1.2em;
  padding: 0.8em 2.5em;
  text-align: center;
  place-self: center;
  margin-top: 3em;
`;

const Description = styled.p`
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

const LocationText = styled(Description)`
  text-align: center;
  padding: 2em;
`;

const ContactButton = styled.button`
  all: unset;
  color: white;
  border-radius: 2em;
  transition: ease-out 0.9s;
  background-image: ${blueGradient};
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

export default ItemDetail;
