import { Stack, Typography, styled } from "@mui/material";

export const StyledStack = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3rem 2rem 3rem 2rem',
    [theme.breakpoints.down("sm")]: {
      margin: '3rem 0 3rem 0',
    },
    [theme.breakpoints.down("400")]: {
        margin: '2rem 0 1rem 0',
    }
}))
export const StyledDiv = styled("div")(({ theme }) => ({
    width: '187px',
    height: '140px',
    background: 'rgba(0, 74, 128, 0.49)',
    borderRadius: '20px',
    [theme.breakpoints.down("lg")]: {
        marginLeft: '23px !important',
    },
    [theme.breakpoints.down("md")]: {
        width: '150px',
        height: '130px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '80px',
        height: '80px',
    },
    [theme.breakpoints.down("400")]: {
        marginLeft: '9px !important',
        borderRadius: '5px',
        width: '50px',
        height: '50px',
    }
}))

export const StyledText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    marginTop: '0.6rem',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '34px',
    textAlign: 'center',
    color: '#FFFFFF',
    [theme.breakpoints.down("md")]: {
        fontSize: '18px',
    lineHeight: '25px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '9px',
    lineHeight: '12px',
    },
    [theme.breakpoints.down("400")]: {
        fontSize: '7px',
        lineHeight: '8px',
    }
}))
export const Span = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    marginTop: '0.6rem',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '34px',
    textAlign: 'center',
    color: 'rgba(188, 17, 17, 1)',
    [theme.breakpoints.down("md")]: {
        fontSize: '15',
    lineHeight: '20px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '15px',
    lineHeight: '25px',
    },
    [theme.breakpoints.down("400")]: {
        fontSize: '14px',
        lineHeight: '8px',
    }
}))