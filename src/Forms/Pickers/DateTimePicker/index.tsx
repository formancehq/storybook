import * as React from 'react';
import { FunctionComponent } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import { FormFieldErrorProps } from '../../../types';
import { TextField } from '../../TextField';

export type DateTimePickerProps = Omit<
  MuiDateTimePickerProps<any, any>,
  'renderInput' | 'value'
> & { onChange?: (value?: Dayjs) => void } & FormFieldErrorProps;

export const DateTimePicker: FunctionComponent<DateTimePickerProps> = ({
  error,
  errorMessage,
  ...props
}) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    props.onChange(newValue);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDateTimePicker
          {...props}
          PaperProps={{
            sx: {
              '& button': {
                borderRadius: '6px',
              },
            },
          }}
          InputAdornmentProps={{
            sx: {
              '& button': {
                borderRadius: '6px',
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
          renderInput={(params: any) => (
            <TextField {...params} error={error} helperText={errorMessage} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};
