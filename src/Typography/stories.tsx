import React from 'react';

import { Typography } from '@mui/material';

import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Typo',
};

export const Large3x = () => <Typography variant="large3x">Title</Typography>;
Large3x.storyName = 'Large3x';
Large3x.parameters = storyDocsParameters;

export const Large2x = () => <Typography variant="large2x">Title</Typography>;
Large2x.storyName = 'Large2x';
Large2x.parameters = storyDocsParameters;

export const Large1x = () => <Typography variant="large1x">Title</Typography>;
Large1x.storyName = 'Large1x';
Large1x.parameters = storyDocsParameters;

export const Large = () => <Typography variant="large">Title</Typography>;
Large.storyName = 'Large';
Large.parameters = storyDocsParameters;

export const H1 = () => <Typography variant="h1">Title</Typography>;
H1.storyName = 'Display normal';
H1.parameters = storyDocsParameters;

export const H2 = () => (
  <>
    <Typography variant="h1">Title H1 example</Typography>
    <Typography variant="h2">Title H2 example</Typography>
  </>
);
H2.storyName = 'Display small';
H2.parameters = storyDocsParameters;

export const Small = () => <Typography variant="h2">Title</Typography>;
Small.storyName = 'Small';
Small.parameters = storyDocsParameters;

export const Headline = () => <Typography variant="headline">Title</Typography>;
Headline.storyName = 'Headline';
Headline.parameters = storyDocsParameters;

export const Heading = () => <Typography variant="heading">Title</Typography>;
Heading.storyName = 'Heading';
Heading.parameters = storyDocsParameters;

export const Body = () => <Typography variant="body2">Title</Typography>;
Body.storyName = 'Body';
Body.parameters = storyDocsParameters;

export const SmallBody = () => <Typography variant="body1">Title</Typography>;
SmallBody.storyName = 'SmallBody';
SmallBody.parameters = storyDocsParameters;

export const Action = () => <Typography variant="action">Title</Typography>;
Action.storyName = 'Action';
Action.parameters = storyDocsParameters;

export const Caption = () => <Typography variant="caption">Title</Typography>;
Caption.storyName = 'Caption';
Caption.parameters = storyDocsParameters;

export const FootNote = () => <Typography variant="footNote">Title</Typography>;
FootNote.storyName = 'FootNote';
FootNote.parameters = storyDocsParameters;

export const Bold = () => <Typography variant="bold">Title</Typography>;
Bold.storyName = 'Bold';
Bold.parameters = storyDocsParameters;

export const Money = () => <Typography variant="money">Title</Typography>;
Money.storyName = 'Money';
Money.parameters = storyDocsParameters;
