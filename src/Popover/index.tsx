import React, { useState } from 'react';

import { Popover as PopoverPrimitive, useTheme } from '@mui/material';

export type PopoverProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  vertical?: 'top' | 'center' | 'bottom' | number;
  horizontal?: 'left' | 'center' | 'right' | number;
  contentSx?: { [key: string]: string | number };
};

export const Popover = (props: PopoverProps) => {
  const {
    children,
    trigger,
    vertical = 'bottom',
    horizontal = 'left',
    contentSx,
  } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { palette } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <span onClick={handleClick}>{trigger}</span>
      <PopoverPrimitive
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          sx: {
            p: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '4px',
            mt: 2,
            backgroundColor: palette.neutral[0],
            borderColor: palette.neutral[100],
            ...contentSx,
          },
        }}
        anchorOrigin={{
          vertical: vertical ? vertical : 'bottom',
          horizontal: horizontal ? horizontal : 'center',
        }}
      >
        {children}
      </PopoverPrimitive>
    </>
  );
};
