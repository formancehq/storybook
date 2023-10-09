import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  useRef,
} from 'react';

import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

export type SearchGroup = {
  title: React.ReactNode;
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
  const triggerContainer = useRef<HTMLSpanElement | null>(null);

  const { palette } = useTheme();

  const handleDialogClose = () => {
    setOpen(false);
    onOpenChange && onOpenChange(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, [open, isOpen]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        onOpenChange?.(o);
      }}
    >
      <Dialog.Trigger asChild>
        <span
          ref={triggerContainer}
          onClick={() => {
            setOpen(true);
            onOpenChange && onOpenChange(true);
          }}
        >
          {trigger}
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="search-dialog">
          <input
            placeholder={placeholder}
            value={value}
            onChange={(value) => {
              setValue(value.target.value);
              onValueChange && onValueChange(value.target.value);
            }}
          />

          {navigation && value.length < 3 && (
            <div onClick={() => setOpen(false)}>{navigation}</div>
          )}

          <div
            className={`${
              value === '' ? 'cmdk-list-no-value' : 'cmdk-list-value'
            } ${isLoading ? 'cmdk-list-loading' : ''}`}
          >
            {!isLoading && value.length >= 3 && elements.length === 0 && (
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
                <Typography
                  sx={{ color: palette.neutral[300], textAlign: 'center' }}
                >
                  {noResults}
                </Typography>
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
                <div>
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
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {!isLoading && value.length >= 3 && elements.length > 0 && (
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
                    padding: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  {elements.map((group, index) => (
                    <>
                      {group.items.length > 0 && (
                        <div key={Math.random() + index}>
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
                              <div
                                className="test-click"
                                onClick={() => handleDialogClose()}
                                key={item?.toString() + index.toString()}
                              >
                                {item}
                              </div>
                            ))}
                          </Box>
                        </div>
                      )}
                    </>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
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
