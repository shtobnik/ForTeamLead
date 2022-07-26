import { InputBase, styled, alpha } from "@mui/material";


export const Search = styled('div')(({ theme }) => {

  return ({
    color: theme.palette.primary.gray,
    position: 'relative',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderColor: theme.palette.borderColor,
    borderWidth: '2px',
    WebkitTapHighlightColor: theme.palette.primary.gray,
    backgroundColor: theme.palette.input.backgroundColor,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
    },
  })
});

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  fontSize: '24px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
