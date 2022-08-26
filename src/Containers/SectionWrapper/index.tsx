import { Box, SxProps, Theme, Typography } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';

export type SectionWrapperProps = {
  title?: string;
  children: ReactElement;
  sx?: SxProps<Theme>;
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
