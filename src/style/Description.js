import { Box, styled, Grid, Typography, Stack, Button } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(217, 229, 255, 1)',
    padding: '3rem 3rem 3rem 8rem',
    [theme.breakpoints.down("1100")]: {
        padding: '3rem 3rem 3rem 3rem',
    },
    [theme.breakpoints.down("md")]: {
        padding: '3rem 3rem 3rem 2rem',
    },
    [theme.breakpoints.down("430")]: {
        padding: '3rem 2rem 3rem 1rem',
    }
}))
export const HeadText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    [theme.breakpoints.down("md")]: {
        fontSize: '24px',
    },
    [theme.breakpoints.down("750")]: {
        fontSize: '20px',
        lineHeight: '24px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '18px',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("430")]: {
        fontSize: '15px',
    }
}))
export const Headtext = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    color: ' rgba(0, 72, 128, 1)',
    [theme.breakpoints.down("md")]: {
        fontSize: '24px',
    },
    [theme.breakpoints.down("750")]: {
        fontSize: '20px',
        lineHeight: '24px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '18px',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("430")]: {
        fontSize: '14px',
    }
}))
export const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    marginTop: '1rem',
    width: '85%',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'justify',
    [theme.breakpoints.down("md")]: {
        width: '90%',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("750")]: {
        marginTop: '0.5rem',
        fontSize: '14px',
        lineHeight: '18px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '98%',
        fontSize: '15px',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("430")]: {
        fontSize: '10px',
    }
}))
export const StyledStack = styled(Stack)(({ theme }) => ({
    margin: " 1rem 0 0 6rem",
    [theme.breakpoints.down("lg")]: {
        margin: " 1rem 0 0 0",
    }
}))
export const StyledDiv = styled("div")(({ theme }) => ({
    marginTop: '7rem',
    [theme.breakpoints.down("md")]: {
        marginTop: '3rem',
    }
}))
export const StyledButton = styled(Button)(({ theme }) => ({
    width: '169px',
    height: '45px',
    backgroundColor: 'black',
    fontWeight: '700',
    fontSize: '16px',
    color: 'white',
    borderRadius: '3px',
    '&:hover': {
        color: 'white',
        backgroundColor: 'black',
    },
    [theme.breakpoints.down("800")]: {
        width: '35%',
        height: '37px',
        fontSize: '13px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '13px',
        width: '25%',
        height: '37px',
    },
    [theme.breakpoints.down("520")]: {
        fontSize: '12px',
        width: '30%',
    },
    [theme.breakpoints.down("415")]: {
        fontSize: '12px',
        width: '40%',
    },
    [theme.breakpoints.down("300")]: {
        fontSize: '10px',
        width: '45%',
    }
}))
export const Styledbox = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '8px',
    height: '110px',
    width: ' 120px',
    background: '#FFFFFF',
    marginBottom: '1rem',
    [theme.breakpoints.down("sm")]: {
        height: '170px',
        width: ' 45%',
    },
    [theme.breakpoints.down("320")]: {
        height: '140px',
    },
}))
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: ' 10px',
    fontWeight: '400',
    lineHeight: '12px',
    letterSpacing: '0.047em',
    color: ' rgba(0, 72, 128, 1)',
    margin: '0.5rem 0 0 0',
    [theme.breakpoints.down("650")]: {
        fontSize: ' 7px',
        lineHeight: '10px',
        letterSpacing: '0.02em',
        margin: '0.3rem 0 0 0',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: ' 17px',
        margin: '1rem 0 0 0',
        lineHeight: '15px',
    },
    [theme.breakpoints.down("395")]: {
        fontSize: ' 14px',
    }

}))
export const Styledtypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: ' 8px',
    fontWeight: '400',
    lineHeight: '12px',
    letterSpacing: '0.04em',
    color: ' rgba(0, 72, 128, 1)',
    margin: '0.1rem 0 0 0',
    [theme.breakpoints.down("sm")]: {
        fontSize: ' 16px',
        margin: '1rem 0 0 0',
        lineHeight: '15px',
    },
    [theme.breakpoints.down("395")]: {
        fontSize: ' 12px',
    },
    [theme.breakpoints.down("320")]: {
        fontSize: ' 11px',
        lineHeight: '10px',
    },
}))
export const Image = styled("img")(({ theme }) => ({
    width: '73px',
    height: '50px',
    [theme.breakpoints.down("sm")]: {
        height: '70px',
        width: ' 70%',
    },
    [theme.breakpoints.down("320")]: {
        height: '60px',
    },

}))
export const Img = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        height: '70px',
        width: ' 70%',
    },
    [theme.breakpoints.down("320")]: {
        height: '50px',
    },
}))
export const Imag = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("800")]: {
        width: '40%px',
        height: '35px',
    },
    [theme.breakpoints.down("300")]: {
        fontSize: '12px',
        width: '50%',
    }
    // [theme.breakpoints.down("430")]: {
    //     width: '110px',
    //     height: '35px',
    // }
}))

export const StyledGrid = styled(Grid)(({ theme }) => ({
    marginTop: '2rem',
    [theme.breakpoints.down("lg")]: {
        display: 'none',
    }
}))
export const MainGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("500")]: {
        flexDirection: 'column',
    }
}))
export const MainStack = styled(Stack)(({ theme }) => ({

    flexDirection: 'Column',
    [theme.breakpoints.down("md")]: {
        flexDirection: 'row',
        marginLeft: '1rem',
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        marginLeft: '1rem',
    }
}))