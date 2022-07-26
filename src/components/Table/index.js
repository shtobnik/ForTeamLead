import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Box, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { StyledDataGrid } from "../../pages/MainInfo/styling";

import {
  RenderFunds,
  RenderHeaderFunds,
  RenderHeaderCapScore,
  RenderScore,
  RenderHeaderScore,
  RenderName,
  RenderPrice,
  RenderImage,
  RenderInfoName,
  RenderLinks,
  RenderReturn,
  RenderAction,
} from './settings';


import CheckboxWrapper from "./CheckboxWrapper";
import CustomPagination from "./CustomPagination";

import Icon from '../Icon';

const StyledDataGrid = styled(DataGrid)(({ isOne, isPagination }) => ({
  border: 'none',
  minHeight: isOne ? '161px' : '325px',
  marginBottom: isPagination ? '32px' : 0,
  m: '28px 0 70px',
  '& .MuiDataGrid-columnHeaders': {
    minHeight: isOne && '16px!important',
    lineHeight: isOne && '16px!important',
  },
  '& .MuiDataGrid-virtualScroller': {
    height: isOne && '72px!important',
    marginTop: isOne && '37px!important',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-main': {
    border: 'none',
    borderRadius: '8px'
  },
  '& .MuiDataGrid-renderingZone': {
    maxHeight: 'none!important'
  },
  '& .MuiDataGrid-cell': {
    lineHeight: 'unset!important',
    maxHeight: 'none!important',
    whiteSpace: 'normal',
    height: '72px',
  },
  '& .MuiDataGrid-row': {
    maxHeight: 'none!important',
  },
  '& .MuiDataGrid-footerContainer': {
    border: 'none',
    justifyContent: 'center',
  }
}));


const columnsMain = [
  { field: 'id', headerName: '№', width: 70 },
  { field: 'firstName', headerName: 'Asset', renderCell: RenderName, width: 250 },
  { field: 'price', headerName: 'PRICE $', renderCell: RenderPrice, width: 130 },
  { field: 'cap', headerName: 'CAP', width: 130 },
  { field: 'fd_cap', headerName: 'FD CAP', width: 130 },
  { field: 'followers', headerName: 'FOLLOWERS', renderCell: RenderPrice, width: 130 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renedrCell: RenderScore, width: 130 },
  { field: 'cap_score', headerName: 'CAP/SCORE', renderHeader: RenderHeaderCapScore, width: 130 },
  { field: 'funds_list', headerName: 'FUNDS LIST', renderHeader: RenderHeaderFunds, renderCell: RenderFunds, width: 150 },
];

const infoColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'image', headerName: '', renderCell: RenderImage, width: 92 },
  { field: 'coin_name', headerName: 'name', renderCell: RenderInfoName, width: 142 },
  { field: 'links', headerName: 'links', renderCell: RenderLinks, width: 134 },
  { field: 'price', headerName: 'PRICE $', renderCell: RenderPrice, width: 162 },
  { field: 'cap', headerName: 'CAP', width: 146 },
  { field: 'fd_cap', headerName: 'FD CAP', width: 146 },
  { field: 'cap_score', headerName: 'CAP/SCORE', renderHeader: RenderHeaderCapScore, width: 146 },
  { field: 'ico_price', headerName: 'ico price', width: 146 },
  { field: 'return', headerName: 'return', renderCell: RenderReturn, width: 134 },
];

const foundersColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'founders', headerName: 'founders', renderCell: RenderName, width: 252 },
  { field: 'description', headerName: 'description', width: 604 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 154 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 144 },
];

const investorsColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'investors', headerName: 'investors', renderCell: RenderName, width: 252 },
  { field: 'description', headerName: 'description', width: 448 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 156 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 156 },
  { field: 'avg_ico_return', headerName: 'avg ico return', renderCell: RenderReturn, width: 144 },
];

export const investorPortfolioColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'invest_portfolio', headerName: 'INVEST PORTFOLIO', renderCell: RenderName, width: 252 },
  { field: 'price', headerName: 'price $', width: 120 },
  { field: 'ico_price', headerName: 'ICO Price', width: 120 },
  { field: 'returns_avg', headerName: 'returnS AVG 0%', width: 120 },
  { field: 'description', headerName: 'description', width: 316 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 120 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 108 },
];

export const followedAllColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'firstName', headerName: 'USERNAME', renderCell: RenderName, width: 260 },
  { field: 'description', headerName: 'description', width: 604 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 155 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 145 },
];

export const followedCeoColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'firstName', headerName: 'USERNAME', renderCell: RenderName, width: 260 },
  { field: 'description', headerName: 'description', width: 604 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 155 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 145 },
  { field: 'funds_list', headerName: 'FUNDS LIST', renderHeader: RenderHeaderFunds, renderCell: RenderFunds, width: 150 },
];

export const friendshipFollowingColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'date', headerName: 'DATE', width: 108 },
  { field: 'action', headerName: 'action', renderCell: RenderAction, width: 130 },
  { field: 'firstName', headerName: 'USERNAME', renderCell: RenderName, width: 250 },
  { field: 'description', headerName: 'description', width: 448 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 156 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 144 },
];

export const friendshipFollowedColumns = [
  { field: 'id', headerName: '№', width: 92, hide: true },
  { field: 'date', headerName: 'DATE', width: 108 },
  { field: 'action', headerName: 'action', renderCell: RenderAction, width: 130 },
  { field: 'firstName', headerName: 'USERNAME', renderCell: RenderName, width: 250 },
  { field: 'description', headerName: 'description', width: 448 },
  { field: 'followers', headerName: 'followers', renderCell: RenderPrice, width: 156 },
  { field: 'score', headerName: 'SCORE', renderHeader: RenderHeaderScore, renderCell: RenderScore, width: 144 },
];


const Table = ({ rows, entriesShows, isOne = false, name, isLink = false }) => {
  let navigate = useNavigate();
  let columns;

  switch (name) {
    case 'coinInfo':
      columns = infoColumns;
      break;
    case 'founders':
      columns = foundersColumns;
      break;
    case 'investors':
      columns = investorsColumns;
      break;
    case 'investorsPortfolio':
      columns = investorPortfolioColumns;
      break;
    case 'followedAll':
      columns = followedAllColumns;
      break;
    case 'followedCeo':
      columns = followedCeoColumns;
      break;
    case 'friendshipFollowing':
      columns = friendshipFollowingColumns;
      break;
    case 'friendshipFollowed':
      columns = friendshipFollowedColumns;
      break;

    default:
      columns = columnsMain;
      break;
  }

  const handleCellClick = (props, e) => {
    if (props.field !== '__check__' && !e.target.href) {
      e.preventDefault();
      navigate('/unitContent/mainInfo');
    }
  };


  return (
    <>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={entriesShows}
        checkboxSelection
        hideFooterPagination={rows.length <= entriesShows}
        hideFooterRowCount={true}
        hideFooterSelectedRowCount={true}
        disableColumnMenu
        onCellClick={isLink ? (params, event) => handleCellClick(params, event) : null}
        autoShowColumnSortButton={true}
        isOne={isOne}
        ColumnSortedAscendingIcon={<Box sx={{ fontSize: '16px', color: 'text.default' }}><Icon image={'Sorting'} /></Box>}
        components={{
          Pagination: CustomPagination,
          BaseCheckbox: CheckboxWrapper
        }}
      />
    </>
  )
};

export default memo(Table);