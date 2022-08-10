import React from 'react';
import { SelectButton } from './index';
import { Box } from '@mui/material';
import { noop } from '../../utils';
import { ContentCopy, ContentCopyTwoTone } from '@mui/icons-material';

export default {
  title: 'Design System/Buttons/Select',
  component: SelectButton,
};

const items = [
  { id: '1', label: 'Lorem ipsum 1' },
  { id: '2', label: 'Lorem ipsum 2' },
  { id: '3', label: 'Lorem ipsum 3' },
  { id: '4', label: 'Lorem ipsum 4' },
  { id: '5', label: 'Lorem ipsum 5' },
  { id: '6', label: 'Lorem ipsum 6' },
  { id: '7', label: 'Lorem ipsum 7' },
  { id: '8', label: 'Lorem ipsum 8' },
  { id: '9', label: 'Lorem ipsum 9' },
  { id: '10', label: 'Lorem ipsum 10' },
  { id: '11', label: 'Lorem ipsum 11' },
];

export const DarkSelectButton = () => (
  <>
    <Box>
      <SelectButton
        label="Dark select"
        variant="dark"
        items={items}
        onClick={noop}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Dark select with side action"
        variant="dark"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopy /> }}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Dark select with side action and footer action"
        variant="dark"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopy /> }}
        footerAction={{ onClick: noop, label: 'New action' }}
      />
    </Box>
  </>
);
DarkSelectButton.storyName = 'Dark';

export const LightSelectButton = () => (
  <>
    <Box>
      <SelectButton label="Light select" items={items} onClick={noop} />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Light select with sideAction"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopyTwoTone /> }}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Light select with side action and footer action"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopyTwoTone /> }}
        footerAction={{ onClick: noop, label: 'New action' }}
      />
    </Box>
  </>
);

LightSelectButton.storyName = 'Light';

export const StrokeSelectButton = () => (
  <>
    <Box>
      <SelectButton
        label="Stroke select"
        variant="stroke"
        items={items}
        onClick={noop}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Stroke select with sideAction"
        variant="stroke"
        items={items}
        onClick={() => null}
        sideAction={{ onClick: noop, icon: <ContentCopyTwoTone /> }}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Stroke select with side action and footer action"
        variant="stroke"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopyTwoTone /> }}
        footerAction={{ onClick: noop, label: 'New action' }}
      />
    </Box>
  </>
);
StrokeSelectButton.storyName = 'Stroke';

export const PrimarySelectButton = () => (
  <>
    <Box>
      <SelectButton
        label="Primary select"
        variant="primary"
        items={items}
        onClick={noop}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Primary select with sideAction"
        variant="primary"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopyTwoTone /> }}
      />
    </Box>
    <Box mt={2}>
      <SelectButton
        label="Primary select with side action and footer action"
        variant="primary"
        items={items}
        onClick={noop}
        sideAction={{ onClick: noop, icon: <ContentCopyTwoTone /> }}
        footerAction={{ onClick: noop, label: 'New action' }}
      />
    </Box>
  </>
);
PrimarySelectButton.storyName = 'Primary';
