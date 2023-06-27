import { Box, styled, Stack} from "@mui/material"

//Styled Box
export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0 0.1rem 0 0.5rem",
    [theme.breakpoints.up("md")]:{
      display: "none",
    }
  }))
  export const Styledbox = styled(Box)(({ theme }) => ({
         textAlign: 'right',
         padding: '1rem'
  }))
  export const StyledStack = styled(Stack)(({ theme }) => ({
    alignItems: 'flex-start',
    padding: '12px'
  }))

// Styled Search
export const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px 0 10px",
    borderRadius: '20px',
    width: "80%",
    height: '32.9px',
    color: "#605F5E",
}))
