import React from 'react';

import { storyDocsParameters } from '../../utils';

import { SourceDestination } from './index';

export default {
  title: 'Design System/Sections/SourceDestination',
  component: SourceDestination,
};

export const SourceDestinationSection = () => (
  <SourceDestination label="world" />
);

SourceDestinationSection.storyName = 'Default';
SourceDestinationSection.parameters = storyDocsParameters;

export const SourceDestinationSectionBlue = () => (
  <SourceDestination label="world" color="blue" onClick={() => null} />
);

SourceDestinationSectionBlue.storyName = 'Blue';
SourceDestinationSectionBlue.parameters = storyDocsParameters;
export const SourceDestinationSectionGreen = () => (
  <SourceDestination label="world" color="green" onClick={() => null} />
);

SourceDestinationSectionGreen.storyName = 'Green';
SourceDestinationSectionGreen.parameters = storyDocsParameters;

export const SourceDestinationSectionLong1 = () => (
  <SourceDestination
    label="practitioner:m001:patient:p003:invoices:unpaid"
    color="green"
    onClick={() => null}
  />
);

SourceDestinationSectionLong1.storyName = 'Long1';
SourceDestinationSectionLong1.parameters = storyDocsParameters;

export const SourceDestinationSectionLong2 = () => (
  <SourceDestination
    label="payment:eyJDb25uZWN0b3JJRCI6eyJQcm92aWRlciI6IkFEWUVOIiwiUmVmZXJlbmNlIjoiNzMyZDQzNmItZGYwNy00M2Q2LWI2MzktYjg3MTcxZmVlOTlkIn0sIlJlZmVyZW5jZSI6IlpEQks1NTQ4TFpWS1RINjUiLCJUeXBlIjoiUEFZLUlOIn0"
    color="green"
    onClick={() => null}
  />
);

SourceDestinationSectionLong2.storyName = 'Long2';
SourceDestinationSectionLong2.parameters = storyDocsParameters;

export const SourceDestinationSectionLong3 = () => (
  <SourceDestination
    label="wallets:b37d4d22b8af4fd0bde9cfa61e45378d:main"
    color="green"
    onClick={() => null}
  />
);

SourceDestinationSectionLong3.storyName = 'Long3';
SourceDestinationSectionLong3.parameters = storyDocsParameters;
