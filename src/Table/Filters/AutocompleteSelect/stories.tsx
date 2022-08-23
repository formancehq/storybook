import React from 'react';
import { AutocompleteSelect } from './index';
import { storyDocsParameters } from '../../../utils';
import Checkbox from '@mui/material/Checkbox';
import { ImportExport } from '@mui/icons-material';

export default {
  title: 'Design System/Table/Filters',
  component: AutocompleteSelect,
};

const data = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

export const DefaultAutocompleteCheckbox = () => (
  <AutocompleteSelect
    noOptionsText="Sorry"
    label="Ledgers"
    placeholder="Search a ledger"
    name="ledgers"
    multiple
    id="checkboxes-tags-demo"
    options={data}
    icon={<ImportExport />}
    disableCloseOnSelect
    getOptionLabel={(option) => option.title}
    renderOption={(props, option, { selected }) => (
      <li {...props}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option.title}
      </li>
    )}
    style={{ width: 500 }}
  />
);
DefaultAutocompleteCheckbox.storyName = 'Default';
DefaultAutocompleteCheckbox.parameters = storyDocsParameters;
