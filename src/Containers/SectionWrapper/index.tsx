import React, { FunctionComponent, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

export type SectionWrapperProps = {
  title?: string;
  element?: ReactElement;
  children: ReactElement;
};

export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({
  title,
  element,
  children,
}) => {
  const label = title || '';
  let justifyContent = 'space-between';
  if (!title && element) {
    justifyContent = 'end';
  }
  if (title && !element) {
    justifyContent = 'start';
  }

  return (
    <>
      {children && (
        <Box mt={3} data-testid={label?.toLowerCase()}>
          <Box display="flex" justifyContent={justifyContent}>
            {title && <Typography variant="h2">{label}</Typography>}
            {element && element}
          </Box>
          <Box mt={1}>{children}</Box>
        </Box>
      )}
    </>
  );
};
