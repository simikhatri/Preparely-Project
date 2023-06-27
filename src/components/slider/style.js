import { Box, styled, Typography } from "@mui/material";

export const Styledbox = styled(Box)(({ theme }) => ({
    // minWidth: '2050px',
    padding: '18px 70px 18px 70px',
    background: '#004A80',
    height: '240px',
    [theme.breakpoints.down("lg")]: {
        height: '200px',
    },
    [theme.breakpoints.down("md")]: {
    height: '170px',
},
[theme.breakpoints.down("700")]: {
    height: '130px',
},
}))
export const StyledBox = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '12px',
    height: '240px',
    width: ' 220px',
    background: '#FFFFFF',
    [theme.breakpoints.down("lg")]: {
        height: '200px',
        width: ' 180px',
    },
    [theme.breakpoints.down("md")]: {
        height: '170px',
        width: ' 140px',
    },
    [theme.breakpoints.down("700")]: {
        height: '130px',
        width: ' 100px',
    },
    [theme.breakpoints.down("290")]: {
        width: ' 140px',
    },

}))
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: ' 20px',
    fontWeight: '400',
    lineHeight: '30px',
    letterSpacing: '0.047em',
    color: ' rgba(0, 72, 128, 1)',
    [theme.breakpoints.down("lg")]: {
        fontSize: ' 17px',
        fontWeight: '400',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: ' 15px',
        fontWeight: '400',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("700")]: {
        fontSize: ' 10px',
        fontWeight: '400',
        lineHeight: '10px',
    },
}))
export const Image = styled("img")(({ theme }) => ({
    margin: '0.5rem 0 0rem 0',
    [theme.breakpoints.down("lg")]: {
        height: '90px',
        width: ' 90px',
    },
    [theme.breakpoints.down("md")]: {
        height: '70px',
        width: ' 70px',
    },
    [theme.breakpoints.down("md")]: {
        height: '55px',
        width: ' 55px',
    },
}))
export const StyledImage = styled("img")(({ theme }) => ({
    margin: '1rem 0 3rem 0',
    [theme.breakpoints.down("1200")]: {
        margin: '1rem 0 1rem 0',
        height: '80px',
        width: ' 90px',
    },
    [theme.breakpoints.down("md")]: {
        margin: '1rem 0 0 0',
        height: '55px',
        width: ' 70px',
    },
    [theme.breakpoints.down("md")]: {
        margin: '0.5rem 0 0 0',
        height: '55px',
        width: ' 55px',
    },
}))


