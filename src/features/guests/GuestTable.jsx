import Spinner from '../../ui/Spinner';
import GuestRow from './GuestRow';
import { useGuests } from './useGuests';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

function GuestTable() {
  const { isLoading, guests } = useGuests();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!guests.length) return <Empty resourceName='guests' />;

  // 1) FILTER
  const filterValue = searchParams.get('search') || 'all';

  let filteredGuests;
  if (filterValue === 'all') filteredGuests = guests;
  if (filterValue === 'no-discount')
    filteredGuests = guests.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredGuests = guests.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'fullName-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedGuests = filteredGuests.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns='0.5fr 1.2fr 1.8fr 1.8fr 1.2fr'>
        <Table.Header>
          <div>Sr No.</div>
          <div>Name</div>
          <div>Email</div>
          <div>National ID</div>
          <div>Nationality</div>
        </Table.Header>

        {
          <Table.Body
            data={sortedGuests}
            render={(guest, i) => (
              <GuestRow counter={i + 1} guest={guest} key={guest.id} />
            )}
          />
        }
      </Table>
    </Menus>
  );
}

export default GuestTable;
