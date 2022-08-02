import React from 'react';
import { Amount } from './index';

export default {
  title: 'Design System/Sections/Amount',
  component: Amount,
};

export const AmountSection = () => (
  <div>
    <Amount amount={123} asset="EUR" />
  </div>
);

AmountSection.storyName = 'Amount';
