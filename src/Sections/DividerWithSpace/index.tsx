import React, { FunctionComponent } from 'react';

import { Divider } from '@mui/material';

export type DividerWithSpaceProps = {
  mb?: string;
  pt?: string;
  borderColor?: string;
};

export const DividerWithSpace: FunctionComponent<DividerWithSpaceProps> = ({
  mb = '30px',
  pt = '30px',
  borderColor,
}) => (
  <Divider
    sx={{
      mb,
      pt,
      borderColor,
    }}
  />
);
