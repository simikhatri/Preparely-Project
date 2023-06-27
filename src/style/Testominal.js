import { Box, styled, Typography, Stack } from "@mui/material";

export const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
    }
}))
export const StyledBox = styled(Box)(({ theme }) => ({
    margin: '5rem 2rem 3rem 2rem',
    [theme.breakpoints.down("500")]: {
        margin: '5rem 0.5rem 3rem 0.5rem',
    }
}))
export const Styleddiv = styled("div")(({ theme }) => ({
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
}))

export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    color: '#373030',
}))
export const Paragraph = styled(Typography)(({ theme }) => ({
    width: '50%',
    paddingTop: '0.5rem',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '19px',
    lineHeight: '24px',
    color: '#373030',
    [theme.breakpoints.down("md")]: {
        width: '100%',
    },
    [theme.breakpoints.down("400")]: {
        fontSize: '15px',
    }
}))

export const StyledDiv = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    width: '220px',
    height: '260px',
    background: 'linear-gradient(141.03deg, #FFFCFC -13.46%, rgba(255, 252, 252, 0) 100%)',
    border: '2px solid #847979',
    filter: 'drop-shadow(0px 10px 52px rgba(7, 3, 3, 0.1))',
    borderRadius: '15px',
    [theme.breakpoints.down("md")]: {
        width: '180px',
        height: '260px',
        marginLeft: '24px !important',
    },
    [theme.breakpoints.down("sm")]: {
        width: '230px',
        height: '260px',
        marginBottom: '4rem !important',
    }
}))
export const Image = styled('img')(({ theme }) => ({
    position: 'relative',
    bottom: '50px',
}))
export const StyledTypo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    position: 'relative',
    bottom: '40px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#373030',
}))
export const Div = styled("div")(({ theme }) => ({
    boxSizing: 'border-box',
    display: 'flex',
    textAlign: "left",
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 1rem 1rem 1rem',
    position: 'relative',
    bottom: '25px',
    width: '185px',
    height: '150px',
    background: '#D9D9D9',
    borderRadius: '19px',
    [theme.breakpoints.down("md")]: {
        width: '140px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '185px',
    }
}))

export const StyledPara = styled(Typography)(({ theme }) => ({
    padding: '0 0.5rem 0 0.5rem',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#373030',
}))