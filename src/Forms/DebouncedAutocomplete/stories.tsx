import React, { useState } from 'react';

import { Box } from '@mui/material';

import { Chip } from '../../Chip';
import { storyDocsParameters } from '../../utils';

import { AutocompleteSuggestion, DebouncedAutocomplete } from './index';

export default {
  title: 'Design System/Forms/DebouncedAutocomplete',
  component: DebouncedAutocomplete,
};

const items: AutocompleteSuggestion[] = [
  { value: 'jane', label: 'Jane' },
  { value: 'janette', label: 'Janette' },
  { value: 'janis', label: 'Janis' },
];

export const DefaultAutocomplete = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <DebouncedAutocomplete
        load={async (): Promise<AutocompleteSuggestion[]> => items}
        placeholder="Search"
        onChange={(_event: any, item: AutocompleteSuggestion | null) => {
          if (item) {
            setSelected(`value: ${item.value}, label: ${item.label}`);
          }
        }}
      />
      {selected && (
        <Box m={1}>
          <Chip variant="square" label={selected} />
        </Box>
      )}
    </>
  );
};
DefaultAutocomplete.storyName = 'Default';
DefaultAutocomplete.parameters = storyDocsParameters;

export const ErrorAutocomplete = () => (
  <DebouncedAutocomplete
    error
    errorMessage="You must choose a value"
    load={async (): Promise<AutocompleteSuggestion[]> => items}
    placeholder="Search"
  />
);
ErrorAutocomplete.storyName = 'Error';
ErrorAutocomplete.parameters = storyDocsParameters;
