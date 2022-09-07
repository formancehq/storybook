import React from 'react';
import { Row, Table } from './index';
import { SourceDestination } from '../Sections/SourceDestination';
import { storyDocsParameters } from '../utils';
import { Chip } from '../Chip';
import { Box } from '@mui/material';
import { LightAutocompleteCheckbox } from './Filters/AutocompleteSelect/stories';

export default {
  title: 'Design System/Table',
  component: Table,
};

type User = {
  id: string;
  name: string;
  status: 'Validated' | 'Banished' | 'Pending';
};

const items: User[] = [
  {
    id: '123',
    name: 'Jean',
    status: 'Validated',
  },
  {
    id: '1234',
    name: 'Jeanne',
    status: 'Pending',
  },
  {
    id: '12345',
    name: 'Mick',
    status: 'Banished',
  },
];

const labels = {
  pagination: {
    showing: 'Showing',
    separator: '/',
    results: 'results',
  },
  noResults: 'No results',
};

const columns = [
  { key: 'id', label: 'Uniq Id' },
  { key: 'name', label: 'Lastname' },
  { key: 'status', label: 'Status' },
];

export const DefaultTable = () => (
  <Table
    labels={labels}
    id="default"
    items={items}
    columns={columns}
    onNext={() => null}
    onPrevious={() => null}
    renderItem={(user: User, index) => (
      <Row
        key={index}
        keys={[
          'id',
          'name',
          <SourceDestination
            key={user.id}
            label={user.status}
            onClick={() => null}
          />,
        ]}
        item={user}
      />
    )}
  />
);
DefaultTable.storyName = 'Default';
DefaultTable.parameters = storyDocsParameters;

export const EmptyTable = () => (
  <Table
    labels={labels}
    id="no-result"
    items={[]}
    withHeader={false}
    columns={[]}
    onNext={() => null}
    onPrevious={() => null}
    renderItem={(user: User, index) => (
      <Row
        key={index}
        keys={[
          'id',
          'name',
          <SourceDestination
            key={user.id}
            label={user.status}
            onClick={() => null}
          />,
        ]}
        item={user}
      />
    )}
  />
);
EmptyTable.storyName = 'Empty';
EmptyTable.parameters = storyDocsParameters;

export const SimpleTable = () => (
  <Table
    labels={labels}
    id="no-result"
    items={items}
    columns={columns}
    withPagination={false}
    withHeader={false}
    onNext={() => null}
    onPrevious={() => null}
    renderItem={(user: User, index) => (
      <Row key={index} keys={['id', 'name']} item={user} />
    )}
  />
);
SimpleTable.storyName = 'Simple';
SimpleTable.parameters = storyDocsParameters;

export const ActiveFiltersTable = () => (
  <>
    <Box component="span" display="flex" gap="26px" flexWrap="wrap" mb={2}>
      <LightAutocompleteCheckbox />
      <LightAutocompleteCheckbox />
      <LightAutocompleteCheckbox />
    </Box>
    <Table
      labels={labels}
      id="active-filters"
      items={items}
      columns={[columns[0], columns[1]]}
      withPagination={false}
      onNext={() => null}
      onPrevious={() => null}
      activeFilters={
        <Box component="span" display="flex" gap="12px" flexWrap="wrap">
          {[
            'active filter 1',
            'active filter 2',
            'active filter 3',
            'active filter 4',
            'active filter 5',
            'active filter 6',
            'active filter 7',
          ].map((filter, index) => (
            <Chip key={index} label={filter} variant="square" />
          ))}
        </Box>
      }
      renderItem={(user: User, index) => (
        <Row key={index} keys={['id', 'name']} item={user} />
      )}
    />
  </>
);
ActiveFiltersTable.storyName = 'Active filters';
ActiveFiltersTable.parameters = storyDocsParameters;

// TODO create paginable table story
