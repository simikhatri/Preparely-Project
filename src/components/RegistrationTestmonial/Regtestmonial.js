import { Box, styled, Typography } from "@mui/material";

export const Styledbox = styled(Box)(({ theme }) => ({
   textAlign: 'center',
   marginBottom: '2rem',
}))
export const StyledBox = styled(Box)(({ theme }) => ({
    padding: '18px 70px 18px 70px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: '240px',
    [theme.breakpoints.down("281")]: {
        padding: '18px 50px 18px 50px',
    }
}))
export const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '34px',
    color: '#373030',
}))
export const StyledDiv = styled('div')(({ theme }) => ({
    marginRight: '1rem',
    boxSizing: 'border-box',
    width: '130px',
    height: '150px',
    background: 'linear-gradient(141.03deg, #FFFCFC -13.46%, rgba(255, 252, 252, 0) 100%)',
    border: '2px solid #847979',
    borderRadius: '15px',
    [theme.breakpoints.down("md")]: {
        width: '150px',
        height: '150px',
        marginLeft: '24px !important',
    },
    [theme.breakpoints.down("sm")]: {
        width: '150px',
        height: '150px',
    }
}))
export const Image = styled('img')(({ theme }) => ({
    position: 'relative',
    width: '60px',
    bottom: '30px',
}))
export const StyledTypo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    position: 'relative',
    bottom: '30px',
    fontWeight: '400',
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
    margin: '0 0.5rem 0.7rem 0.6rem',
    position: 'relative',
    bottom: '25px',
    width: '108px',
    height: '87px',
    background: '#D9D9D9',
    borderRadius: '19px',
    [theme.breakpoints.down("md")]: {
        width: '108px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '108px',
    }
}))

export const StyledPara = styled(Typography)(({ theme }) => ({
    padding: '0 0.5rem 0 0.5rem',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '12px',
    color: '#373030',
}))
export const StackBox = styled(Box)(({ theme }) => ({
 display: 'flex',
 overflowX: 'auto',
 height: '180px',
 paddingTop:' 2rem',
}))