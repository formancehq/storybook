import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { TxidProps } from './types';

const Txid: FunctionComponent<TxidProps> = ({ id }) => (
  <Typography
    sx={{ color: ({ palette }) => palette.neutral[600] }}
  >{`000${id}`}</Typography>
);

export default Txid;
