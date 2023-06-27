import { Box, Typography, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
    margin: '0 3rem 1rem 3rem',
    position: 'absolute',
    width: '166px',
    height: '378px',
    background: '#004A80',
    [theme.breakpoints.down("lg")]: {
        margin: '0 3rem 1rem 1rem',
    },
    [theme.breakpoints.down("md")]: {
        width: '100px',
        height: '300px',
    },
    [theme.breakpoints.down("663")]: {
        display: 'none',
    },
}))
export const StyledDiv = styled("Div")(({ theme }) => ({
    textAlign: 'center',
    position: 'relative',
    width: '219px',
    height: '230px',
    background: '#D9E5FF',
    left: '128px',
    top: '75px',
    [theme.breakpoints.down("lg")]: {
        left: '90px',
    },
    [theme.breakpoints.down("md")]: {
        width: '140px',
        height: '170px',
        left: '60px',
        top: '65px',
    },
    [theme.breakpoints.down("663")]: {
        marginLeft: '1rem',
        left: '1px',
        height: '155px',
    },
    [theme.breakpoints.down("550")]: {
        width: '110px',
        height: '140px',
        marginLeft: '0.6rem',
    },
    [theme.breakpoints.down("420")]: {
        width: '90px',
        height: '100px',
        marginLeft: '0.4rem',
    },
    [theme.breakpoints.down("350")]: {
        display:'none',
    },
}))
export const Image = styled("img")(({ theme }) => ({
    margin: '1.3rem 0 0 0',
    [theme.breakpoints.down("md")]: {
        width: '130px',
    },
    [theme.breakpoints.down("663")]: {
        width: '120px',
    },
    [theme.breakpoints.down("550")]: {
        width: '100px',
    },
    [theme.breakpoints.down("420")]: {
        width: '80px',
        height: '70px',
    },
}))
export const TextBox = styled(Box)(({ theme }) => ({
    width: '500px',
    position: 'relative',
    left: '370px',
    bottom: '90px',
    [theme.breakpoints.down("lg")]: {
        left: '330px',
    },
    [theme.breakpoints.down("md")]: {
        width: '400px',
        left: '210px',
        bottom: '70px',
    },
    [theme.breakpoints.down("663")]: {
        width: '350px',
        left: '170px',
        bottom: '60px',
    },
    [theme.breakpoints.down("550")]: {
        width: '70%',
        left: '130px',
        bottom: '57px',
    },
    [theme.breakpoints.down("420")]: {
        left: '105px',
        bottom: '32px',
    },
    [theme.breakpoints.down("350")]: {
        width: '100%',
        position: 'static',
        textAlign: 'center',
    },
}))
export const Heading = styled(Typography)(({ theme }) => ({
    color: '#004A80',
    fontSize: '21px',
    [theme.breakpoints.down("md")]: {
        fontSize: '19px',
    },
    [theme.breakpoints.down("550")]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down("420")]: {
        fontSize: '14px',
    },
   
}))
export const Paragraph = styled(Typography)(({ theme }) => ({
    fontSize: '17px',
    LineHight: '25.38px',
    [theme.breakpoints.down("lg")]: {
        fontSize: '15px',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: '13px',
    },
    [theme.breakpoints.down("663")]: {
        fontSize: '11px',
    },
    [theme.breakpoints.down("420")]: {
        fontSize: '9px',
    },
}))

export const StyledrightBox = styled(Box)(({ theme }) => ({
    margin: '0 3rem 1rem 3rem',
    position: 'absolute',
    width: '166px',
    height: '378px',
    bottom: '170px',
    right: '0',
    background: '#004A80',
    [theme.breakpoints.down("lg")]: {
        margin: '0 1rem 1rem 1rem',
    },
    [theme.breakpoints.down("md")]: {
        width: '100px',
        height: '300px',
        bottom: '140px',
    },
    [theme.breakpoints.down("663")]: {
        display: 'none',
    },
}))
export const StyledrightDiv = styled("Div")(({ theme }) => ({
    textAlign: 'center',
    position: 'relative',
    width: '219px',
    height: '230px',
    background: '#D9E5FF',
    right: '0',
    left: '80px',
    bottom: '130px',
    [theme.breakpoints.down("lg")]: {
        left: '50px',
    },
    [theme.breakpoints.down("md")]: {
        width: '140px',
        height: '170px',
        left: '100px',
        bottom: '110px',
    },
    [theme.breakpoints.down("663")]: {
        marginRight: '1rem',
        marginTop: '1rem',
        left: '100px',
        height: '155px',
    },
    [theme.breakpoints.down("550")]: {
        width: '110px',
        height: '140px',
        marginLeft: '0.6rem',
        left: '130px',
        bottom: '100px',

    },
    [theme.breakpoints.down("420")]: {
        width: '90px',
        height: '100px',
        marginLeft: '0.4rem',
        bottom: '80px',
        left: '110px',
    },
    [theme.breakpoints.down("350")]: {
        display:'none',
    },
}))
export const RightBox = styled(Box)(({ theme }) => ({
    textAlign: 'right',
    position: 'absolute',
    right: '0',
    [theme.breakpoints.down("350")]: {
        position: 'static',
    },
}))
export const RightTextBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    right: '365px',
    bottom: '300px',
    [theme.breakpoints.down("lg")]: {
        right: '320px',
    },
    [theme.breakpoints.down("md")]: {
        right: '215px',
        bottom: '250px',
    },
    [theme.breakpoints.down("663")]: {
        right: '165px',
        bottom: '250px',
    },
    [theme.breakpoints.down("550")]: {
        right: '125px',
        bottom: '230px',
    },
    [theme.breakpoints.down("420")]: {
        right: '105px',
        bottom: '185px',
    },
    [theme.breakpoints.down("350")]: {
        width: '100%',
        position: 'static',
        textAlign: 'center',
    },

}))