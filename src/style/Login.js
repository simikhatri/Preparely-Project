import { Box, Typography, styled, TextField, Button, Grid } from "@mui/material";
export const StyledBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '84%',
    background: 'linear-gradient(rgba(0, 74, 128, 0.98) , rgba(255, 255, 255, 1))',
    boxShadow: 24,
    p: 4,
    [theme.breakpoints.down("913")]: {
        height: '90%'
    },
    [theme.breakpoints.down("md")]: {
        height: '90%'
    },
    [theme.breakpoints.down("sm")]: {
        height: '95%'
    },
    [theme.breakpoints.down("420")]: {
        height: '90%',
        width: '90%',
    },
    [theme.breakpoints.down("380")]: {
        height: '90%',
    },

}))
export const LogoBox = styled(Box)(({ theme }) => ({
    margin: '1rem 4.6rem 0 0',
    [theme.breakpoints.down("sm")]: {
        margin: '1rem 0 0 0',
    },
}))
export const StyledDiv = styled("div")(({ theme }) => ({
    textAlign: 'right',
    [theme.breakpoints.down("sm")]: {
        textAlign: 'center',
        marginBottom: '1rem',
    },
}))
export const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'right',
}))
export const MainDiv = styled("div")(({ theme }) => ({
    marginLeft: '3rem',
    [theme.breakpoints.down("sm")]: {
        marginLeft: '1rem',
    },
}))

export const Heading = styled(Typography)(({ theme }) => ({
    marginBottom: '1rem',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: ' 25px',
    lineHeight: '30px',
    color: '#000000',
    [theme.breakpoints.down("sm")]: {
        textAlign: 'center',
        fontSize: ' 20px',
    },
    [theme.breakpoints.down("430")]: {
        fontSize: ' 16px',
    },
    [theme.breakpoints.down("386")]: {
        fontSize: ' 15px',
    },
    [theme.breakpoints.down("290")]: {
        fontSize: ' 14px',
    }
}))
export const StyledField = styled(TextField)(({ theme }) => ({
    backgroundColor: '#F1E9E9',
    width: '55%',
    borderRadius: '15px',
    marginBottom: '1rem',
    [theme.breakpoints.down("430")]: {
        marginLeft: '0',
        width: '95%',
    },
    [theme.breakpoints.down("1025")]: {
        width: '65%',
    },
    [theme.breakpoints.down("md")]: {
        width: '80%',
    },
    [theme.breakpoints.down("sm")]: {
        width: '95%',
    }
}))
export const Label = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: ' 20px',
    lineHeight: '24px',
    color: '#ffffff',
    [theme.breakpoints.down("430")]: {
        width: '95%',
    },
}))
export const BtnBox = styled("div")(({ theme }) => ({
    margin: '1rem 0 0 5.7rem',
    [theme.breakpoints.down("1025")]: {
        margin: '0.7rem 0 0 4rem',
    },
    [theme.breakpoints.down("913")]: {
        margin: '0.7rem 0 0 3rem',
    },
    [theme.breakpoints.down("md")]: {
        margin: '0.7rem 0 0 4rem',
    },
    [theme.breakpoints.down("770")]: {
        margin: '0.7rem 0 0 3rem',
    },
    [theme.breakpoints.down("sm")]: {
        margin: '0.7rem 0 0 0',
        textAlign: 'center'
    },
}))
export const LoginButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
    fontSize: ' 18px',
    lineHeight: '24px',
    width: '289px',
    height: ' 38px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #52E5E7 0%, #130CB7 100%)',
    color: 'white',
    [theme.breakpoints.down("420")]: {
        width: '170px',
    }
}))
export const StyledGrid = styled(Grid)(({ theme }) => ({
    marginTop: '0.7rem',
    marginLeft: '5rem',
    [theme.breakpoints.down("1025")]: {
        marginTop: '0.6rem',
        marginLeft: '3rem',
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: '0',
    },
    [theme.breakpoints.down("420")]: {
        marginTop: '0.56rem',
    }
}))
export const StyledTypo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
    fontSize: ' 15px',
    color: 'white',
    [theme.breakpoints.down("1025")]: {
        fontSize: ' 14px',
    },
    [theme.breakpoints.down("420")]: {
        fontSize: ' 10px',
    },
    [theme.breakpoints.down("281")]: {
        fontSize: ' 8px',
    }
}))
export const Img = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("420")]: {
        width: '100px',
    }
}))