import {styled, Box, Typography} from "@mui/material"

export const StyledDiv = styled("div")(({ theme }) => ({
    color: "black",
    textAlign: 'center',
}))
export const StyledBox = styled(Box)(({ theme }) => ({
    padding: '2rem 1rem 2rem 1rem',
    [theme.breakpoints.up("sm")]: {
    padding: '4rem',}
}))
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '26px',
    fontWeight: '700',
    margin: '0 0 1rem 0',
}))

export const Styledtypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
     fontSize: '14px',
    fontWeight: '400',
    [theme.breakpoints.up("sm")]: {
    fontSize: '16px',
    fontWeight: '400',
    }
}))