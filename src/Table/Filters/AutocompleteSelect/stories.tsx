import React from 'react';

import { ImportExport } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';

import { storyDocsParameters } from '../../../utils';

import { AutocompleteOption, AutocompleteSelect } from './index';

export default {
  title: 'Design System/Table/Filters',
  component: AutocompleteSelect,
};

const data = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
];

const AutocompleteCheckbox = () => (
  <AutocompleteSelect
    noOptionsText="Sorry"
    placeholder="Search a ledger"
    name="ledgers"
    multiple
    id="checkboxes-tags-demo"
    options={data}
    icon={<ImportExport />}
    disableCloseOnSelect
    getOptionLabel={(option: AutocompleteOption) => option.label}
    renderOption={(props, option: AutocompleteOption, { selected }) => (
      <li {...props}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option.label}
      </li>
    )}
    style={{ width: 500 }}
  />
);

export const DefaultAutocompleteCheckbox = () => <AutocompleteCheckbox />;
DefaultAutocompleteCheckbox.storyName = 'Checkbox';
DefaultAutocompleteCheckbox.parameters = storyDocsParameters;

export const DefaultAutocompleteSimple = () => (
  <AutocompleteSelect
    name="simple"
    disablePortal
    multiple={false}
    id="combo-box-demo"
    options={data}
    sx={{ width: 300 }}
  />
);
DefaultAutocompleteSimple.storyName = 'DefaultSimple';
DefaultAutocompleteSimple.parameters = storyDocsParameters;
