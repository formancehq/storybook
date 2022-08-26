import {
  Box,
  Paper,
  SxProps,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from '@mui/material';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { get, isEmpty } from 'lodash';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { LoadingButton } from '../Buttons/LoadingButton';

export enum TableConfig {
  ACTIONS = 'actions',
}

export type TableLoad = () => Promise<any>;
export type TableProps = {
  renderItem: (_item: any, key: number, data: any) => void;
  columns: { key: string; width?: number; hidden?: boolean; label: string }[];
  load?: TableLoad;
  id?: string;
  withPagination?: boolean;
  withFilters?: boolean;
  paginationSize?: number;
  items?: any;
  path?: string;
  withHeader?: boolean;
  onInit?: () => void;
  onNext: (next: string) => void;
  onPrevious: (previous: string) => void;
  labels?: {
    pagination: { showing: string; separator: string; results: string };
    noResults: string;
  };
};

export type RowProps = {
  keys: Array<string | ((item: any) => void) | null | ReactElement>;
  item: any;
  id?: string;
  renderActions?: () => any;
  sx?: SxProps<Theme>;
};

export const Row: FunctionComponent<RowProps> = ({
  item,
  keys,
  renderActions,
  sx,
}) => {
  const pSx = sx || {};

  const styles = {
    whiteSpace: 'nowrap',
    width: '350px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ...pSx,
  } as SxProps<Theme>;

  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
      key={item}
      data-testid={item.id}
    >
      <>
        {/*Eslint rule skipped but in control*/}
        {/*eslint-disable-next-line*/}
        {keys.map((key: any, index) => {
          if (typeof key === 'function') {
            return (
              <TableCell key={index} sx={styles}>
                {key(item)}
              </TableCell>
            );
          } else {
            if (typeof key === 'object') {
              return (
                <TableCell key={index} sx={styles}>
                  {key}
                </TableCell>
              );
            } else {
              return (
                <TableCell key={index}>
                  <Typography variant="body1" sx={styles}>
                    {item[key]}
                  </Typography>
                </TableCell>
              );
            }
          }
        })}
        {renderActions && <TableCell>{renderActions()}</TableCell>}
      </>
    </TableRow>
  );
};

export const Table: FunctionComponent<TableProps> = ({
  id,
  renderItem,
  columns,
  withHeader = true,
  load,
  withPagination = true,
  paginationSize = 15,
  path = 'data',
  items,
  onNext,
  onPrevious,
  labels: labelsProps,
}) => {
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [pageSize, setPageSize] = useState(paginationSize);
  const [data, setData] = useState([]);
  const [metas, setMetas] = useState<{ next: string; previous: string }>();
  const labels =
    {
      pagination: {
        showing: 'Showing',
        separator: '/',
        results: 'results',
      },
      noResults: 'No results',
    } || labelsProps;
  const init = async (results?: any) => {
    if (results) {
      const items = get(results, path, results.length > 0 ? results : []);
      setMetas(results);
      setData(items);
      const total = get(results, 'total.value', 1);
      if (withPagination) {
        setTotal(total);
        setHasMore(get(results, 'hasMore', false));
        setPageSize(get(results, 'pageSize', paginationSize));
        setHasPrevious(isEmpty(get(results, 'previous', false)));
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (load) {
        const results = await load();
        await init(results);
      }
      if (items) {
        await init(items);
      }
    })();
  }, [items]);

  const handleNextButtonClick = () => {
    if (metas && metas.next) onNext(metas.next);
  };

  const handlePreviousButtonClick = () => {
    if (metas && metas.previous) onPrevious(metas.previous);
  };

  return (
    <>
      {data && (
        <Box pb={1} pt={1}>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{
              border: ({ palette }) => `1px solid ${palette.neutral[200]}`,
              borderRadius: '4px',
            }}
          >
            <TableContainer>
              <MuiTable aria-label="table" id={id}>
                {withHeader && (
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => {
                        if (column.key === TableConfig.ACTIONS) {
                          return (
                            <TableCell
                              key={TableConfig.ACTIONS}
                              sx={{ width: 10 }}
                            />
                          );
                        }

                        return (
                          <TableCell
                            key={column.key}
                            sx={{
                              width: `${column.width}%`,
                              borderColor: ({ palette }) =>
                                palette.neutral[200],
                            }}
                          >
                            {!column.hidden && (
                              <Typography color="primary.light">
                                {column.label}
                              </Typography>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                )}
                <TableBody
                  sx={{
                    '& td': {
                      borderColor: ({ palette }) => palette.neutral[100],
                    },
                  }}
                >
                  {/* TODO fix ts-ignore */}
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore*/}
                  {data.length > 0 ? (
                    data.map((item: any, index: number, data: any) =>
                      renderItem(item, index, data)
                    )
                  ) : (
                    <TableRow>
                      <TableCell key="noResult" sx={{ borderBottom: 'none' }}>
                        <Typography>{labels.noResults}</Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </MuiTable>
            </TableContainer>
          </Paper>
          {/* Pagination */}
          {withPagination && data.length > 0 && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Box>
                <Typography color="primary.light" sx={{ opacity: 0.4 }}>
                  {`${labels.pagination.showing} ${pageSize} ${labels.pagination.separator} ${total} ${labels.pagination.results}`}
                </Typography>
              </Box>
              <Box>
                <LoadingButton
                  id="pagination-previous"
                  disabled={hasPrevious}
                  onClick={handlePreviousButtonClick}
                  endIcon={<ArrowLeft />}
                />
                <LoadingButton
                  id="pagination-next"
                  disabled={!hasMore}
                  onClick={handleNextButtonClick}
                  endIcon={<ArrowRight />}
                />
              </Box>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
