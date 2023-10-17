import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  Fragment,
} from 'react';

import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
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
  const inputSearch = useRef<HTMLInputElement | null>(null);

  const { palette } = useTheme();

  const handleDialogClose = () => {
    setOpen(false);
    onOpenChange && onOpenChange(false);
    setValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      if (cursor.element < elements[cursor.group].items.length - 1) {
        setCursor((c) => ({
          ...c,
          element: c.element + 1,
        }));
        const e = document.querySelector(
          `[data-search-group="${cursor.group}"] [data-search-item="${
            cursor.element + 1
          }"]`
        ) as HTMLDivElement;
        e.scrollIntoView();
      } else {
        if (cursor.group < elements.length - 1) {
          setCursor((c) => ({
            ...c,
            group: c.group + 1,
            element: 0,
          }));
          const e = document.querySelector(
            `[data-search-group="${cursor.group}"] [data-search-item="0"]`
          ) as HTMLDivElement;
          e.scrollIntoView();
        }
      }
    }

    if (e.key === 'ArrowUp') {
      if (cursor.element > 0) {
        setCursor((c) => ({
          ...c,
          element: c.element - 1,
        }));
        const e = document.querySelector(
          `[data-search-group="${cursor.group}"] [data-search-item="${
            cursor.element - 1
          }"]`
        ) as HTMLDivElement;
        e.scrollIntoView();
      } else {
        if (cursor.group > 0) {
          setCursor((c) => ({
            ...c,
            group: c.group - 1,
            element: elements[c.group - 1].items.length - 1,
          }));
          const e = document.querySelector(
            `[data-search-group="${cursor.group}"] [data-search-item="0"]`
          ) as HTMLDivElement;
          e.scrollIntoView();
        }
      }
    }

    if (e.key === 'Enter') {
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
        setTimeout(() => {
          setValue('');
          inputSearch.current?.focus();
        }, 1);
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, [open, isOpen]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
          onOpenChange && onOpenChange(true);
          setTimeout(() => {
            inputSearch.current?.focus();
          }, 1);
        }}
      >
        <span ref={triggerContainer}>{trigger}</span>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          onOpenChange && onOpenChange(false);
          setValue('');
        }}
      >
        <div className="search-dialog">
          <input
            ref={inputSearch}
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
                    <Fragment key={`group${index}`}>
                      {group.items.length > 0 && (
                        <>
                          {index === 0 && (
                            <Typography
                              sx={{
                                fontSize: '1.3rem',
                                marginBottom: '-8px',
                              }}
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
                                  key={`item${index}${i}`}
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
        </div>
      </Dialog>
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
