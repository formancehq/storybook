import {CalendarMonthOutlined, KeyboardArrowDown, KeyboardArrowUp, Search,} from '@mui/icons-material';
import {ClickAwayListener, List, Paper, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import React, {FunctionComponent, useState} from 'react';
import {LoadingButton} from '../LoadingButton';
import {ButtonVariants, CFunction} from '../types';

export type SelectButtonItem = {
  id: string;
  label: string;
};

export type SelectButtonProps = {
  label: string;
  disabled?: boolean;
  items: SelectButtonItem[];
  id?: string;
  onClick: CFunction<SelectButtonItem>;
  variant?: ButtonVariants;
  sideAction?: {
    icon: React.ReactNode;
    onClick: CFunction<SelectButtonItem>;
  };
  footerAction?: {
    label: string;
    onClick: CFunction<SelectButtonItem>;
  };
};

export const SelectButton: FunctionComponent<SelectButtonProps> = ({
  label,
  id,
  items,
  onClick,
  variant,
  sideAction,
  footerAction,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string>(label);
  const [filteredItems, setFilteredItems] = useState<SelectButtonItem[]>(items);

  const handleClick = (item: SelectButtonItem) => {
    setSelectedLabel(item.label);
    onClick(item);
    setToggle(false);
  };

  const handleOnChange = (e: any) => {
    const filtered = items.filter(
      ({ label }) =>
        label.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <LoadingButton
        content={selectedLabel}
        id={id}
        onClick={() => setToggle(true)}
        variant={variant}
        endIcon={toggle ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        startIcon={<CalendarMonthOutlined />}
      />
      {toggle && (
        <ClickAwayListener onClickAway={() => setToggle(false)}>
          <Paper
            elevation={0}
            sx={{
              width: '290px',
              maxHeight: '380px',
              minHeight: '250px',
              position: 'absolute',
              zIndex: 999,
            }}
          >
            <TextField
              placeholder="Search"
              fullWidth
              InputProps={{ startAdornment: <Search /> }}
              onChange={handleOnChange}
            ></TextField>
            <List sx={{ height: '250px', overflowY: 'auto' }}>
              {filteredItems.map((item: SelectButtonItem) => (
                <Box
                  key={item.id}
                  display="flex"
                  alignItems="center"
                  justifyContent={sideAction ? 'space-between' : 'initial'}
                >
                  <LoadingButton
                    content={item.label}
                    id={`item-${item.id}`}
                    onClick={() => handleClick(item)}
                    fullwidth
                    sx={{ justifyContent: 'flex-start' }}
                  />
                  {sideAction && (
                    <LoadingButton
                      id={`item-${item.id}-side-action`}
                      onClick={sideAction.onClick}
                      startIcon={sideAction.icon}
                    />
                  )}
                </Box>
              ))}
            </List>
            {footerAction && (
              <Box display="flex" justifyContent="center">
                <LoadingButton
                  id="footer-action"
                  content={footerAction.label}
                  onClick={footerAction.onClick}
                  variant="primary"
                  fullwidth
                />
              </Box>
            )}
          </Paper>
        </ClickAwayListener>
      )}
    </>
  );
};
