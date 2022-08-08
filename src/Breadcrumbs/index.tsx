import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  useTheme,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { CFunction } from '../types';

export type BreadcrumbsProps = {
  id?: string;
  links: { onClick: CFunction<any>; label: string }[];
};

export const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  id,
  links,
}) => {
  const { palette } = useTheme();

  return (
    <Box
      role="presentation"
      id={id}
      sx={{
        borderTop: `1px solid ${palette.neutral[700]}`,
        backgroundColor: palette.neutral[900],
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '16px 40px',
      }}
    >
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        sx={{ '& .MuiBreadcrumbs-separator': { color: palette.neutral[500] } }}
      >
        {links.map((link, index) => {
          const color =
            index === links.length - 1
              ? palette.neutral[0]
              : palette.neutral[500];

          return (
            <Link
              underline="hover"
              sx={{ color }}
              onClick={link.onClick}
              key={index}
            >
              {link.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};
