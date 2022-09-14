import React, { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

export type AmountProps = {
  amount: number;
  asset: string;
};

export const Amount: FunctionComponent<AmountProps> = ({ asset, amount }) => (
  <Typography variant="money">{`${asset} ${amount}`}</Typography>
);
