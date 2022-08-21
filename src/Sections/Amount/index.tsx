import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

export type AmountProps = {
  amount: number;
  asset: string;
};

export const Amount: FunctionComponent<AmountProps> = ({ asset, amount }) => (
  <Typography variant="money">{`${asset} ${amount}`}</Typography>
);
