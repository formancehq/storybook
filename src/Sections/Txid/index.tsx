import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

export type TxidProps = {
  id: number;
};

export const Txid: FunctionComponent<TxidProps> = ({ id }) => (
  <Typography
    sx={{ color: ({ palette }) => palette.neutral[600] }}
  >{`000${id}`}</Typography>
);