import React from 'react';
import Txid from '../components/Txid/Txid';

export default {
  title: 'Design System/Sections/Txid',
  component: Txid,
};

export const TxidSection = () => (
  <div>
    <Txid id={12345} />
  </div>
);

TxidSection.storyName = 'Txid';
