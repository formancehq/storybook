import React, { FunctionComponent, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

import { Row, Table } from '../../Table';

export type Action = {
  key: string;
  title: string;
  description?: string;
  button: ReactElement;
};

export type ActionZoneProps = {
  actions: Action[];
};

export const ActionZone: FunctionComponent<ActionZoneProps> = ({ actions }) => {
  const renderRowActions = (action: Action) => (
    <Box component="span" key={action.key} sx={{ float: 'right' }}>
      {action.button}
    </Box>
  );

  return (
    <Table
      id="action-zone"
      items={actions}
      withPagination={false}
      withHeader={false}
      columns={[]}
      renderItem={(action: Action, index: number) => (
        <Row
          key={index}
          keys={[
            <Box component="span" key={index}>
              <Typography variant="bold">{action.title}</Typography>
              <Typography sx={{ color: ({ palette }) => palette.neutral[500] }}>
                {action.description}
              </Typography>
            </Box>,
          ]}
          item={action}
          renderActions={() => renderRowActions(action)}
        />
      )}
    />
  );
};
