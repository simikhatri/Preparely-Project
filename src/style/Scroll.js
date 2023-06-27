import {styled, Box, Typography } from "@mui/material";

export const StyledDiv = styled("div")(({ theme }) => ({
    overflowX: 'auto',
}))
export const Styledbox = styled(Box)(({ theme }) => ({
    minWidth: '2050px',
    padding: '18px 70px 18px 70px',
    background: '#004A80',
    height:'240px',
}))

export const StyledBox = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '12px',
    height: '240px',
    width:' 220px',
   background: '#FFFFFF',
    
}))
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize:' 20px',
    fontWeight: '400',
    lineHeight: '30px',
    letterSpacing: '0.047em',
    color: ' rgba(0, 72, 128, 1)',
    // margin: '1.5rem 0 0 0',

}))
export const Image = styled("img")(({ theme }) => ({
   margin: '0.5rem 0 0rem 0',
}))
export const StyledImage = styled("img")(({ theme }) => ({
    margin: '1rem 0 3rem 0',
 }))
 

