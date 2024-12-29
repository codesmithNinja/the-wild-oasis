import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function GuestTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'fullName-asc', label: 'Sort by name (A-Z)' },
          { value: 'fullName-desc', label: 'Sort by name (Z-A)' },
          { value: 'email-asc', label: 'Sort by email (A-Z)' },
          { value: 'email-desc', label: 'Sort by email (Z-A)' },
          { value: 'nationality-asc', label: 'Sort by nationality (A-Z)' },
          { value: 'nationality-desc', label: 'Sort by nationality (Z-A)' },
        ]}
      />
    </TableOperations>
  );
}

export default GuestTableOperations;
