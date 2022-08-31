import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from '@mui/x-date-pickers/DesktopDatePicker';
import { FunctionComponent } from 'react';

export type DatePickerProps = Omit<
  DesktopDatePickerProps<any, any>,
  'renderInput' | 'value'
> & { onChange?: (value?: Dayjs) => void };

export const DatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    props.onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        PaperProps={{
          sx: {
            '& button': {
              borderRadius: '4px',
            },
          },
        }}
        InputAdornmentProps={{
          sx: {
            '& button': {
              borderRadius: '4px',
            },
            '& button:hover': {
              color: ({ palette }) => palette.neutral[500],
              backgroundColor: () => 'transparent',
            },
            '& .MuiSvgIcon-root': {
              color: ({ palette }) => palette.neutral[900],
            },
          },
        }}
        value={value}
        onChange={handleChange}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};