import React, { FunctionComponent, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

import { LoadingButton, LoadingButtonProps } from '../../Buttons/LoadingButton';

export type SectionWrapperProps = {
  title?: string;
  button?: LoadingButtonProps;
  children: ReactElement;
};

export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({
  title,
  button,
  children,
}) => {
  const label = title || '';
  let justifyContent = 'space-between';
  if (!title && button) {
    justifyContent = 'end';
  }
  if (title && !button) {
    justifyContent = 'start';
  }

  return (
    <>
      {children && (
        <Box mt={3} data-testid={label?.toLowerCase()}>
          <Box display="flex" justifyContent={justifyContent}>
            {title && <Typography variant="h2">{label}</Typography>}
            {button && <LoadingButton {...button} />}
          </Box>
          <Box mt={1}>{children}</Box>
        </Box>
      )}
    </>
  );
};
