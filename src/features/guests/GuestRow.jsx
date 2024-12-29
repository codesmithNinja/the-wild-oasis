import styled from 'styled-components';
import Table from '../../ui/Table';

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Label = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

function GuestRow({ counter, guest }) {
  const {
    // id: guestId,
    fullName,
    email,
    nationalID,
    nationality,
    countryFlag,
  } = guest;

  return (
    <Table.Row>
      <Label>{counter}</Label>
      <Label>{fullName}</Label>
      <Label>{email}</Label>
      <Label>{nationalID}</Label>
      <ImageBox>
        <Img src={countryFlag} />
        &nbsp;<Label>{nationality}</Label>
      </ImageBox>
    </Table.Row>
  );
}

export default GuestRow;
