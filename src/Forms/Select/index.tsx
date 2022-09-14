import React, { FunctionComponent, ReactNode } from 'react';

import {
  SelectProps as MuiSelectProps,
  MenuItem,
  FormControl,
  Select as MuiSelect,
  SelectChangeEvent,
} from '@mui/material';

export type SelectItems = {
  id: string | number;
  label: string;
};
export type SelectProps = {
  select: MuiSelectProps;
  items: SelectItems[];
  placeholder: string;
};

export const Select: FunctionComponent<SelectProps> = ({
  select,
  items,
  placeholder,
}) => {
  const [value, setValue] = React.useState(placeholder);

  const handleChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
    setValue(event.target.value);
    select.onChange && select.onChange(event, child);
  };

  const menuItemSx = {
    borderRadius: 0,
    '&:hover': { borderRadius: 0 },
    '&.Mui-selected': { borderRadius: 0 },
  };

  return (
    <FormControl fullWidth>
      <MuiSelect displayEmpty value={value} {...select} onChange={handleChange}>
        <MenuItem
          value={placeholder}
          sx={{ ...menuItemSx, color: ({ palette }) => palette.neutral[400] }}
          disabled
        >
          {placeholder}
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id} sx={menuItemSx}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
