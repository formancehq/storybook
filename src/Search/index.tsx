import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';

import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
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
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const modalAnimation = {
  initial: {
    y: 10,
    x: 0,
    opacity: 0,
  },
  in: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      type: 'spring',
    },
  },
  out: {
    x: 0,
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.3,
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
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
    isOpen = false,
    onOpenChange,
  } = props;

  const [open, setOpen] = useState<boolean>(isOpen);
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

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
          onOpenChange && onOpenChange(true);
        }}
      >
        {trigger}
      </span>
      <Command.Dialog
        open={open}
        onClick={() => setOpen(false)}
        onOpenChange={(open) => {
          setOpen(open);
          onOpenChange && onOpenChange(open);
        }}
        shouldFilter={false}
      >
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
          {!isLoading && value !== '' && elements.length === 0 && (
            <motion.div
              variants={modalAnimation}
              initial="initial"
              exit="out"
              animate="in"
              style={{
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Command.Empty>
                <Typography
                  sx={{ color: palette.neutral[300], textAlign: 'center' }}
                >
                  {noResults}
                </Typography>
              </Command.Empty>
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              variants={modalAnimation}
              initial="initial"
              exit="out"
              animate="in"
              style={{
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
            </motion.div>
          )}

          <AnimatePresence>
            {!isLoading && value !== '' && elements.length > 0 && (
              <motion.div
                variants={modalAnimation}
                initial="initial"
                exit="out"
                animate="in"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  height: '300px',
                  overflowY: 'auto',
                }}
              >
                {elements.map((group, index) => (
                  <Command.Group key={Math.random() + index}>
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
                      {group.items.map((item, index) => (
                        <Command.Item key={item?.toString() + index.toString()}>
                          {item}
                        </Command.Item>
                      ))}
                    </Box>
                  </Command.Group>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
    background: palette.neutral[800],
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
