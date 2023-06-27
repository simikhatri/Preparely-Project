import { AppBar, styled, Stack, Button } from "@mui/material"

//Styled AppBar
export const StyledAppbar = styled(AppBar)(({ theme }) => ({
    padding: '2.5rem 0 2.5rem 0',
    backgroundColor: '#004A80',
    [theme.breakpoints.up("sm")]: {
        position: 'sticky',
        backgroundColor: '#004A80',
        height: '145px',
        padding: '2.5rem 0 2.5rem 2rem',
        boxShadow: 'none',
    }
}))
//Styled Stack
export const StyledStack = styled(Stack)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    }
}))
//Styled Button
export const Styledbutton = styled(Button)(({ theme }) => ({
    color: 'white',
    borderRadius: '20px',
    margin: '5px',
    fontSize: '10px',
    fontWeight: "500",
    border: '2px solid white',
    '&:hover': {
        color: 'white',
        border: '2px solid white',
    },
    [theme.breakpoints.up("sm")]: {
    color: 'white',
    borderRadius: '20px',
    margin: '7px',
    fontSize: '15px',
    fontWeight: "500",
    border: '2px solid white',
    height: '30px',
    lineHeight: '17.78px',
    '&:hover': {
        color: 'white',
        border: '2px solid white',
    }
}
}))
// Styled Search Field
export const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: '20px',
    width: "40%",
    height: '32.9px',
}))
// Styled Image
export const Image = styled("img")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: '2px',
    padding: '1px',
    width: '30px',
    [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
    borderRadius: '2px',
    padding: '2px',
    width: '35px',
    }
}))
