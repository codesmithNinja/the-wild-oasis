import Heading from '../ui/Heading';
import Row from '../ui/Row';
// import GuestTableOperations from '../features/guests/GuestTableOperations';
import GuestTable from '../features/guests/GuestTable';

function Guests() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Guests</Heading>
        {/* <GuestTableOperations /> */}
      </Row>

      <Row>
        <GuestTable />
      </Row>
    </>
  );
}

export default Guests;
