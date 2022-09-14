import React from 'react';

import { storyDocsParameters } from '../../utils';

import { Txid } from './index';

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
TxidSection.parameters = storyDocsParameters;
