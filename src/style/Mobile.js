import { Box, styled, Typography } from "@mui/material";

export const StyledDiv = styled(Box)(({ theme }) => ({
    width: '177px',
    height: '182px',
    background: '#004A80',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    [theme.breakpoints.down("1025")]: {
        marginTop: '2rem',
        marginBottom: '0',
    },
    [theme.breakpoints.down("820")]: {
        width: '155px',
        height: '170px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '130px',
        height: '140px',
    },
    [theme.breakpoints.down("470")]: {
        width: '110px',
        height: '130px',
    },
    [theme.breakpoints.down("370")]: {
        width: '90px',
        height:  '120px',
    },
}))
export const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        marginLeft: '1rem',
    },
    [theme.breakpoints.down("1100")]: {
        marginLeft: '2rem',
    },
    [theme.breakpoints.down("1025")]: {
        marginTop: '3rem',
    },
    [theme.breakpoints.down("950")]: {
        marginLeft: '4rem',
    },
    [theme.breakpoints.down("900")]: {
        marginLeft: '0',
    },
    [theme.breakpoints.down("717")]: {
        marginLeft: '2rem',
    },
    [theme.breakpoints.down("381")]: {
        marginLeft: '2rem',
    }, 
    [theme.breakpoints.down("300")]: {
        marginTop: '2.3rem',
    },
}))
export const InnerDiv = styled(Box)(({ theme }) => ({
    width: '112px',
    height: '125px',
    background: '#ffffff',
    [theme.breakpoints.down("820")]: {
        width: '100px',
        height: '140px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '90px',
        height: '90px',
    },
    [theme.breakpoints.down("370")]: {
        width: '70px',
        height:  '80px',
    },
}))
export const Image = styled("img")(({ theme }) => ({
    width: '112px',
    height: '122px',
    [theme.breakpoints.down("820")]: {
        width: '100px',
        height: '120px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '90px',
        height: '90px',
    },
    [theme.breakpoints.down("370")]: {
        width: '70px',
        height:  '80px',
    },
}))
export const Heading = styled(Typography)(({ theme }) => ({
    margin: '0.8rem 0 1rem 0',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '30px',
    color: '#000000',
    [theme.breakpoints.down("lg")]: {
        fontSize: '22px',
        margin: '0.8rem 0 0.5rem 0',
    },
    [theme.breakpoints.down("815")]: {
        fontSize: '19px',
    },
    [theme.breakpoints.down("717")]: {
        fontSize: '17px',
    },
    [theme.breakpoints.down("553")]: {
        fontSize: '14px',
        lineHeight: '15px',
    },
    [theme.breakpoints.down("420")]: {
        fontSize: '12px',
        lineHeight: '13px',
    },
    [theme.breakpoints.down("370")]: {
        fontSize: '10px',
        lineHeight: '12px',
    },
    [theme.breakpoints.down("300")]: {
        fontSize: '9px',
    },
}))
export const Description = styled(Typography)(({ theme }) => ({
    width: '70%',
    margin: '0.5rem 0 1rem 0',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '22px',
    [theme.breakpoints.down("lg")]: {
        fontSize: '17px',
    },
    [theme.breakpoints.down("1025")]: {
        fontSize: '16px',
        width: '90%',
    },
    [theme.breakpoints.down("815")]: {
        fontSize: '14px',
        lineHeight: '17px',
    },
    [theme.breakpoints.down("717")]: {
        fontSize: '12px',
        lineHeight: '15px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '98%',
        fontSize: '10px',
        lineHeight: '12px',
    },
    [theme.breakpoints.down("420")]: {
        fontSize: '9px',
        lineHeight: '10px',
    },
    [theme.breakpoints.down("370")]: {
        fontSize: '8px',
        lineHeight: '8px',
    },
}))
