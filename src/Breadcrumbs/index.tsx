import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  useTheme,
} from '@mui/material';
import React, { FunctionComponent } from 'react';

export type BreadcrumbsLink = { onClick?: () => void; label: string };

export type BreadcrumbsProps = {
  id?: string;
  links: BreadcrumbsLink[];
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
        padding: '4px 26px',
      }}
    >
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': { color: palette.neutral[500] },
          '& .MuiLink-root': {
            textDecoration: 'none',
          },
        }}
      >
        {links.map((link, index) => {
          const color =
            index === links.length - 1
              ? palette.neutral[0]
              : palette.neutral[500];

          return (
            <Link
              sx={{
                ':hover': {
                  color: link.onClick
                    ? palette.neutral[0]
                    : palette.neutral[500],
                  cursor: link.onClick ? 'pointer' : 'initial',
                },
                color,
              }}
              onClick={link.onClick && link.onClick}
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
