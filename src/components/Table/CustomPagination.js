
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { styled } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';


const PaginationItemStyled = styled(PaginationItem)(({ theme }) => ({
  border: 'none',
  height: '38px',
  padding: '9px 17px',
  '&.Mui-selected': {
    border: 'none',
    backgroundColor: theme.palette.control.backgroundColor,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.control.hover,
    }
  },
}));


const CustomPagination = (entriesShows) => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => <PaginationItemStyled {...props2} disableRipple />}
      onChange={(event, value) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
};

export default CustomPagination;