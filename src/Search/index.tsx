import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';

import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import { Command } from 'cmdk';
import './style.css';

export type SearchGroup = {
  title: string;
  items: React.ReactNode[];
  showMore?: React.ReactNode;
};

export type SearchProps = {
  placeholder?: string;
  navigation?: React.ReactNode;
  elements: SearchGroup[];
  noResults?: string;
  trigger: React.ReactNode;
  isLoading?: boolean;
  onValueChange?: (value: string) => void;
};

export const Search: FunctionComponent<SearchProps> = (props: SearchProps) => {
  const {
    placeholder = 'Search an element',
    navigation,
    elements,
    noResults = 'No results found',
    trigger,
    isLoading = false,
    onValueChange,
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const { palette } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input
          placeholder={placeholder}
          value={value}
          onValueChange={(value) => {
            setValue(value);
            onValueChange && onValueChange(value);
          }}
        />

        {navigation && value === '' && navigation}

        <Command.List
          className={`${
            value === '' ? 'cmdk-list-no-value' : 'cmdk-list-value'
          } ${isLoading ? 'cmdk-list-loading' : ''}`}
          style={{ padding: '16px', width: '100%', boxSizing: 'border-box' }}
        >
          {isLoading && (
            <Command.Loading>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  color: palette.neutral[300],
                }}
              >
                <CircularProgress sx={{ color: palette.neutral[700] }} />
              </Box>
            </Command.Loading>
          )}

          {!isLoading && (
            <>
              <Command.Empty>
                <Typography>{noResults}</Typography>
              </Command.Empty>
              {elements.map((group) => (
                <Command.Group key={group.title}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: '8px',
                    }}
                  >
                    <Typography sx={{ color: palette.neutral[300] }}>
                      {group.title}
                    </Typography>
                    {group.showMore && <>{group.showMore}</>}
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {group.items.map((item) => (
                      <Command.Item key={item?.toString()}>{item}</Command.Item>
                    ))}
                  </Box>
                </Command.Group>
              ))}
            </>
          )}
        </Command.List>
      </Command.Dialog>
    </>
  );
};

export type SearchTriggerProps = {
  children: React.ReactNode;
  command?: string;
};

export const SearchTrigger = (props: SearchTriggerProps) => {
  const { children, command = '⌘K' } = props;

  const { palette } = useTheme();

  const buttonStyle: CSSProperties = {
    background: palette.neutral[700],
    color: palette.neutral[300],
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    borderRadius: '6px',
    border: `1px solid ${palette.neutral[500]}`,
    width: '100%',
    height: '40px',
    padding: '0 8px 0 12px',
    justifyContent: 'space-between',
  };

  const shortcutStyle: CSSProperties = {
    display: 'inline-flex',
    padding: '4px 8px',
    border: `1px solid ${palette.neutral[500]}`,
    borderRadius: '4px',
    fontSize: '12px',
    background: palette.neutral[700],
  };

  return (
    <button style={buttonStyle}>
      <Typography>{children}</Typography>
      <span style={shortcutStyle}>{command}</span>
    </button>
  );
};
