import { Box, styled, Typography, Stack, ListItem, Grid } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(0, 72, 128, 1)',
    padding: '5rem 4rem 3rem 4rem',
    [theme.breakpoints.down("lg")]: {
        padding: '2rem 1rem 2rem 2rem',
    },
    [theme.breakpoints.down("761")]: {
        padding: '2rem 0 2rem 1rem',
    },
}))
export const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("600")]: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
    }
}))
export const StyledDiv = styled("div")(({ theme }) => ({
    marginTop: '2rem',
    textAlign: 'center',
    paddingTop: '12px',
    boxSizing: 'border-box',
    width: '149.98px',
    height: '175.44px',
    background: '#FFFFFF',
    borderRadius: '8px',
    [theme.breakpoints.down("1025")]: {
        paddingTop: '2px',
        marginTop: '3rem',
        marginLeft: '2rem',
        width: '130px',
        height: '140px',
    },
    [theme.breakpoints.down("761")]: {
        paddingTop: '2px',
        marginTop: '3rem',
        marginLeft: '1rem',
        width: '120px',
        height: '120px',
    },
     [theme.breakpoints.down("401")]: {
        width: '80px',
        height: '80px',
     },
     [theme.breakpoints.down("301")]: {
      height: '65px',
   }
}))
export const LogoImage = styled("img")(({ theme }) => ({
    width: '90%',
    height: '100% !important',
}))
export const Styleddiv = styled("div")(({ theme }) => ({
    boxSizing: 'border-box',
    margin: '4rem 0 0 0',
    [theme.breakpoints.down("1025")]: {
        margin: '5rem 0 0 0',
    },
    [theme.breakpoints.down("401")]: {
        margin: '3.5rem 0 0 0',
   }
}))
export const Image = styled("img")(({ theme }) => ({
    width: '27.29px',
    height: '30.53px',
    [theme.breakpoints.down("401")]: {
        width: '24px',
        height: '27px',
   }
    
}))
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    Weight: '400',
    fontSize: '20px',
    lineHeight: '24.38px',
    color: 'white',
    [theme.breakpoints.down("1025")]: {
        fontSize: '18px',
        lineHeight: '22px',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: '16px',
        lineHeight: '22px',
    },
    [theme.breakpoints.down("761")]: {
        fontSize: '14px',
        lineHeight: '22px',
    },
    [theme.breakpoints.down("656")]: {
        fontSize: '13px',
    },
    [theme.breakpoints.down("301")]: {
        lineHeight: '12px',
     }

}))
export const StyledStack = styled(Stack)(({ theme }) => ({
    padding: '0 0 1rem 1.6rem',
    [theme.breakpoints.down("md")]: {
        padding: '0 0 1rem 1rem',
    },
    [theme.breakpoints.down("761")]: {
        padding: '0 0 1rem 0.3rem',
    },
}))
export const ExamHeading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '30px',
    lineHeight: '43px',
    color: ' #FFFFFF',
    [theme.breakpoints.down("1025")]: {
        fontSize: '25px',
        lineHeight: '35px',
    },
    [theme.breakpoints.down("md")]: {
        marginTop: '1rem',
        fontSize: '20px',
        lineHeight: '25px',
    },
    [theme.breakpoints.down("761")]: {
        fontSize: '18px',
        lineHeight: '15px',
    },
}))
export const Item = styled(ListItem)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    color: ' #FFFFFF',
    [theme.breakpoints.down("1025")]: {
        fontSize: '15px',
        lineHeight: '18px',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: '12px',
        lineHeight: '14px',
    },
    [theme.breakpoints.down("761")]: {
        fontSize: '9px',
        lineHeight: '10px',
    },
    // [theme.breakpoints.down("600")]: {
    //     paddingLeft: '6rem'
    // },
    // [theme.breakpoints.down("518")]: {
    //     paddingLeft: '5rem'
    // },
  

}))
export const SGrid = styled(Grid)(({ theme }) => ({
        display: 'none',
    [theme.breakpoints.down("sm")]: {
       display: 'flex',
    },
  }))
