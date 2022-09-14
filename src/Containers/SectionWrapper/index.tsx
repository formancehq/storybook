import React, { FunctionComponent, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

export type SectionWrapperProps = {
  title?: string;
  children: ReactElement;
};

export const SectionWrapper: FunctionComponent<SectionWrapperProps> = ({
  title,
  children,
}) => {
  const label = title || '';

  return (
    <>
      {children && (
        <Box mt={3} data-testid={label?.toLowerCase()}>
          {title && <Typography variant="h2">{label}</Typography>}
          <Box mt={1}>{children}</Box>
        </Box>
      )}
    </>
  );
};
