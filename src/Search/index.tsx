import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  Fragment,
} from 'react';

import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

export type SearchGroup = {
  groupTitle: string;
  title: React.ReactNode;
  items: React.ReactNode[];
  showMore?: React.ReactNode;
};

export type SearchGroupTitle = {
  id: string;
  title: React.ReactNode;
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
  const [cursor, setCursor] = useState<{
    element: number;
    group: number;
    item: number;
  }>({
    group: 0,
    element: 0,
    item: 0,
  });
  const triggerContainer = useRef<HTMLSpanElement | null>(null);

  const { palette } = useTheme();

  const handleDialogClose = () => {
    setOpen(false);
    onOpenChange && onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // add keyboard navigation behavior on each item that is a map from groups arrays that is map for elements array
    // and each element is a map from items array

    // if the user press the arrow down key
    if (e.key === 'ArrowDown') {
      // if the cursor is not on the last element of the group
      if (cursor.element < elements[cursor.group].items.length - 1) {
        // move the cursor to the next element
        setCursor((c) => ({
          ...c,
          element: c.element + 1,
        }));
      } else {
        // if the cursor is on the last element of the group
        // and the cursor is not on the last group
        if (cursor.group < elements.length - 1) {
          // move the cursor to the first element of the next group
          setCursor((c) => ({
            ...c,
            group: c.group + 1,
            element: 0,
          }));
        }
      }
    }

    // if the user press the arrow up key
    if (e.key === 'ArrowUp') {
      // if the cursor is not on the first element of the group
      if (cursor.element > 0) {
        // move the cursor to the previous element
        setCursor((c) => ({
          ...c,
          element: c.element - 1,
        }));
      } else {
        // if the cursor is on the first element of the group
        // and the cursor is not on the first group
        if (cursor.group > 0) {
          // move the cursor to the last element of the previous group
          setCursor((c) => ({
            ...c,
            group: c.group - 1,
            element: elements[c.group - 1].items.length - 1,
          }));
        }
      }
    }

    // if the user press the arrow enter key
    if (e.key === 'Enter') {
      // if the cursor is on an element
      if (elements[cursor.group].items[cursor.element]) {
        const link = document.querySelector(
          `[data-search-group="${cursor.group}"] [data-search-item="${cursor.element}"] a`
        ) as HTMLAnchorElement;

        if (link) link.click();
      }
    }
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
            onKeyDown={handleKeyDown}
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
                  onClick={() => handleDialogClose()}
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
                    <Fragment key={index}>
                      {group.items.length > 0 && (
                        <>
                          {index === 0 && (
                            <Typography
                              sx={{ fontSize: '1.3rem', marginBottom: '-8px' }}
                            >
                              {group.groupTitle}
                            </Typography>
                          )}
                          {index !== 0 &&
                            elements[index - 1].groupTitle !==
                              group.groupTitle && (
                              <Typography
                                sx={{
                                  fontSize: '1.3rem',
                                  marginBottom: '-8px',
                                }}
                              >
                                {group.groupTitle}
                              </Typography>
                            )}

                          <div
                            data-search-group={index}
                            className={
                              cursor.group === index ? 'cursor-active' : ''
                            }
                          >
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
                              role="listbox"
                            >
                              {group.items.map((item, i) => (
                                <div
                                  className={
                                    cursor.group === index &&
                                    cursor.element === i
                                      ? 'cursor-el-active'
                                      : ''
                                  }
                                  data-search-item={i}
                                  key={item?.toString() + index.toString()}
                                >
                                  {item}
                                </div>
                              ))}
                            </Box>
                          </div>
                        </>
                      )}
                    </Fragment>
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
