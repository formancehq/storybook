import React from 'react';

import {
  AddOutlined,
  ArrowDropDown,
  DeleteOutlined,
} from '@mui/icons-material';
import { Box, Link } from '@mui/material';

import { storyDocsParameters } from '../../utils';

import { LoadingButton } from './index';

export default {
  title: 'Design System/Buttons/Loading',
  component: LoadingButton,
};

export const LightLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton id="light" onClick={() => true} content="Show light" />
      <LoadingButton
        id="light-disabled"
        onClick={() => true}
        content="Show light disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="light-content-start-end-icon"
        onClick={() => true}
        content="Show light start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="light-content-start-icon-end-disabled"
        onClick={() => true}
        content="Show light start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="light-content-start-icon"
        onClick={() => true}
        content="Show light start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="light-content-start-icon-disabled"
        onClick={() => true}
        content="Show light start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="light-content-end-icon"
        onClick={() => true}
        content="Show light end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="light-content-end-icon-disabled"
        onClick={() => true}
        content="Show light end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="light-start-icon"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="light-end-icon"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="light-end-icon-disabled"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
LightLoadingButtons.storyName = 'Light';
LightLoadingButtons.parameters = storyDocsParameters;

export const StrokeLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton
        id="stroke"
        variant="stroke"
        onClick={() => true}
        content="Show stroke"
      />
      <LoadingButton
        id="stroke-disabled"
        variant="stroke"
        onClick={() => true}
        content="Show stroke disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="stroke-content-start-end-icon"
        variant="stroke"
        onClick={() => true}
        content="Show stroke start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="stroke-content-start-icon-end-disabled"
        variant="stroke"
        onClick={() => true}
        content="Show stroke start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="stroke-content-start-icon"
        variant="stroke"
        onClick={() => true}
        content="Show stroke start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="stroke-content-start-icon-disabled"
        variant="stroke"
        onClick={() => true}
        content="Show stroke start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="stroke-content-end-icon"
        variant="stroke"
        onClick={() => true}
        content="Show stroke end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="stroke-content-end-icon-disabled"
        variant="stroke"
        onClick={() => true}
        content="Show stroke end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="stroke-start-icon"
        variant="stroke"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="stroke-end-icon"
        variant="stroke"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="stroke-end-icon-disabled"
        variant="stroke"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
StrokeLoadingButtons.storyName = 'Stroke';
StrokeLoadingButtons.parameters = storyDocsParameters;

export const PrimaryLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton
        id="primary"
        variant="primary"
        onClick={() => true}
        content="Show primary"
      />
      <LoadingButton
        id="primary-disabled"
        variant="primary"
        onClick={() => true}
        content="Show primary disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="primary-content-start-end-icon"
        variant="primary"
        onClick={() => true}
        content="Show primary start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="primary-content-start-icon-end-disabled"
        variant="primary"
        onClick={() => true}
        content="Show primary start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="primary-content-start-icon"
        variant="primary"
        onClick={() => true}
        content="Show primary start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="primary-content-start-icon-disabled"
        variant="primary"
        onClick={() => true}
        content="Show primary start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="primary-content-end-icon"
        variant="primary"
        onClick={() => true}
        content="Show primary end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="primary-content-end-icon-disabled"
        variant="primary"
        onClick={() => true}
        content="Show primary end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="primary-start-icon"
        variant="primary"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="primary-end-icon"
        variant="primary"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="primary-end-icon-disabled"
        variant="primary"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
PrimaryLoadingButtons.storyName = 'Primary';
PrimaryLoadingButtons.parameters = storyDocsParameters;

export const DarkLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton
        id="dark"
        variant="dark"
        onClick={() => true}
        content="Show dark"
      />
      <LoadingButton
        id="dark-disabled"
        variant="dark"
        onClick={() => true}
        content="Show dark disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="dark-content-start-end-icon"
        variant="dark"
        onClick={() => true}
        content="Show dark start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="dark-content-start-icon-end-disabled"
        variant="dark"
        onClick={() => true}
        content="Show dark start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="dark-content-start-icon"
        variant="dark"
        onClick={() => true}
        content="Show dark start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="dark-content-start-icon-disabled"
        variant="dark"
        onClick={() => true}
        content="Show dark start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="dark-content-end-icon"
        variant="dark"
        onClick={() => true}
        content="Show dark end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="dark-content-end-icon-disabled"
        variant="dark"
        onClick={() => true}
        content="Show dark end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="dark-start-icon"
        variant="dark"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="dark-end-icon"
        variant="dark"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="dark-end-icon-disabled"
        variant="dark"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
DarkLoadingButtons.storyName = 'Dark';
DarkLoadingButtons.parameters = storyDocsParameters;

export const TransparentLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton
        id="transparent"
        variant="transparent"
        onClick={() => true}
        content="Show transparent"
      />
      <LoadingButton
        id="transparent-disabled"
        variant="transparent"
        onClick={() => true}
        content="Show transparent disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="transparent-content-start-end-icon"
        variant="transparent"
        onClick={() => true}
        content="Show transparent start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="transparent-content-start-icon-end-disabled"
        variant="transparent"
        onClick={() => true}
        content="Show transparent start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="transparent-content-start-icon"
        variant="transparent"
        onClick={() => true}
        content="Show transparent start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="transparent-content-start-icon-disabled"
        variant="transparent"
        onClick={() => true}
        content="Show transparent start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="transparent-content-end-icon"
        variant="transparent"
        onClick={() => true}
        content="Show transparent end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="transparent-content-end-icon-disabled"
        variant="transparent"
        onClick={() => true}
        content="Show transparent end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="transparent-start-icon"
        variant="transparent"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="transparent-end-icon"
        variant="transparent"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="transparent-end-icon-disabled"
        variant="transparent"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
TransparentLoadingButtons.storyName = 'Transparent';
TransparentLoadingButtons.parameters = storyDocsParameters;

export const YellowLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton
        id="yellow"
        variant="yellow"
        onClick={() => true}
        content="Show yellow"
      />
      <LoadingButton
        id="yellow-disabled"
        variant="yellow"
        onClick={() => true}
        content="Show yellow disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="yellow-content-start-end-icon"
        variant="yellow"
        onClick={() => true}
        content="Show yellow start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="yellow-content-start-icon-end-disabled"
        variant="yellow"
        onClick={() => true}
        content="Show yellow start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="yellow-content-start-icon"
        variant="yellow"
        onClick={() => true}
        content="Show yellow start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="yellow-content-start-icon-disabled"
        variant="yellow"
        onClick={() => true}
        content="Show yellow start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="yellow-content-end-icon"
        variant="yellow"
        onClick={() => true}
        content="Show yellow end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="yellow-content-end-icon-disabled"
        variant="yellow"
        onClick={() => true}
        content="Show yellow end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="yellow-start-icon"
        variant="yellow"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="yellow-end-icon"
        variant="yellow"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="yellow-end-icon-disabled"
        variant="yellow"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
YellowLoadingButtons.storyName = 'Yellow';
YellowLoadingButtons.parameters = storyDocsParameters;

export const RedLoadingButtons = () => (
  <>
    <Box>
      <LoadingButton
        id="red"
        variant="error"
        onClick={() => true}
        content="Show yellow"
      />
      <LoadingButton
        id="red-disabled"
        variant="error"
        onClick={() => true}
        content="Show yellow disabled"
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="red-content-start-end-icon"
        variant="error"
        onClick={() => true}
        content="Show red start end icon"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
      />
      <LoadingButton
        id="red-content-start-icon-end-disabled"
        variant="error"
        onClick={() => true}
        content="Show red start icon end disabled"
        startIcon={<AddOutlined />}
        endIcon={<ArrowDropDown />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="red-content-start-icon"
        variant="error"
        onClick={() => true}
        content="Show red start icon"
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="red-content-start-icon-disabled"
        variant="error"
        onClick={() => true}
        content="Show red start icon disabled"
        startIcon={<AddOutlined />}
        disabled
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="red-content-end-icon"
        variant="error"
        onClick={() => true}
        content="Show red end icon"
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="red-content-end-icon-disabled"
        variant="error"
        onClick={() => true}
        content="Show red end icon disabled"
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
    <Box mt={2}>
      <LoadingButton
        id="red-start-icon"
        variant="error"
        onClick={() => true}
        startIcon={<AddOutlined />}
      />
      <LoadingButton
        id="red-end-icon"
        variant="error"
        onClick={() => true}
        endIcon={<DeleteOutlined />}
      />
      <LoadingButton
        id="red-end-icon-disabled"
        variant="error"
        onClick={() => true}
        disabled
        endIcon={<DeleteOutlined />}
      />
    </Box>
  </>
);
RedLoadingButtons.storyName = 'Red';
RedLoadingButtons.parameters = storyDocsParameters;

export const HrefButton = () => (
  <Link
    href="https://docs.formance.com/oss/payments/reference/api"
    underline="none"
    target="_blank"
    rel="noopener"
  >
    <LoadingButton variant="dark" content="Click me!" />
  </Link>
);
HrefButton.storyName = 'Href';
HrefButton.parameters = storyDocsParameters;

export const LoadingStateButton = () => (
  <LoadingButton
    variant="dark"
    content="Load !"
    onClick={() =>
      new Promise((resolve) => setTimeout(() => resolve('done'), 1000))
    }
  />
);
LoadingStateButton.storyName = 'Loading';
LoadingStateButton.parameters = storyDocsParameters;
