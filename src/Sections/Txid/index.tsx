import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

export type TxidProps = {
  id: number;
};

export const Txid: FunctionComponent<TxidProps> = ({ id }) => (
  <Typography
    variant="money"
    sx={{ color: ({ palette }) => palette.blue.darker }}
  >{`000${id}`}</Typography>
);
