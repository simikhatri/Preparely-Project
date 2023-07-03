import { Box, styled, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    margin: '7rem 1rem 3rem 1rem',
    [theme.breakpoints.up("md")]: {
        margin: '7rem 1rem 4rem 1rem',
    },
    [theme.breakpoints.down("550")]: {
        margin: '7rem 1rem 4rem 1rem',
    },
    [theme.breakpoints.down("350")]: {
        margin: '3rem 1rem 4rem 1rem',
    },
}))

export const StyledDiv = styled("div")(({ theme }) => ({
    margin: '9rem 0 0 1rem',
    padding: '6rem 0 0 0',
    [theme.breakpoints.up("md")]: {
        margin: '9rem 0 0 6rem',
        padding: '6rem 0 0 0',
    },
    [theme.breakpoints.down("500")]: {
        margin: '2rem 0 0 1rem',
        padding: '3rem 0 0 0',
    },
    [theme.breakpoints.down("350")]: {
        margin: '0 0 0 1rem',
        padding: '0',
    },

}))

export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    marginBottom: '1rem',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '0em',
    color: '#004A80',
    [theme.breakpoints.up("sm")]: {
        marginBottom: '1rem',
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '34px',
        letterSpacing: '0em',
        color: '#004A80',
    }
}))
export const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20px',
    [theme.breakpoints.up("sm")]: {
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '20px',
    }
}))
