import React from 'react';
import LoadingButton from '../components/LoadingButton';
import { AddOutlined, DeleteOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

export default {
  title: 'Design System/CTA',
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
