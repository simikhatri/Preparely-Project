import { Box, styled, Grid, Typography } from "@mui/material";

// Main Container
export const StyledBox = styled(Box)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#004A80',
    padding: '1rem 4rem 2rem 6rem',
    [theme.breakpoints.down("950")]: {
        padding: '1rem 3rem 2rem 2rem',
    },
    [theme.breakpoints.down("452")]: {
        padding: '1rem 1rem 2rem 2rem',
    },
    [theme.breakpoints.down("388")]: {
        padding: '1rem 0.3rem 2rem 0.7rem',
    }
}))
// First Row Box
export const StyledGrid = styled(Grid)(({ theme }) => ({
    textAlign: "left",
  
}))
// Secong Row Box
export const Styledgrid = styled(Grid)(({ theme }) => ({
    boxSizing: 'border-box',
}))
// title
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    marginTop: '1rem',
    fontWeight: '700',
    fontSize: '36px',
    [theme.breakpoints.down("950")]: {
        fontSize: '30px',
    },
    [theme.breakpoints.down("747")]: {
        fontSize: '28px',
    },
    [theme.breakpoints.down("576")]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down("388")]: {
        fontSize: '15px',
    }
}))
// Paragraph
export const Styledtypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    marginTop: '2rem',
    fontWeight: '400',
    fontSize: '26px',
    [theme.breakpoints.down("950")]: {
        fontSize: '22px',
    },
    [theme.breakpoints.down("747")]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down("576")]: {
        fontSize: '14px',
    },
    [theme.breakpoints.down("452")]: {
        fontSize: '12px',
    },
    [theme.breakpoints.down("388")]: {
        fontSize: '9px',
    }
}))
// Image
export const Image = styled('img')(({ theme }) => ({
    width: '300px',
    heigth: '300px',
    [theme.breakpoints.down("928")]: {
        width: '250px',
        heigth: '250px',
    },
    [theme.breakpoints.down("747")]: {
        width: '200px',
        heigth: '200px',
    },
    [theme.breakpoints.down("605")]: {
        marginTop: '4rem', 
        width: '170px',
        heigth: '150px',
    },
    [theme.breakpoints.down("480")]: {
        width: '140px',
        heigth: '150px',
    },
    [theme.breakpoints.down("388")]: {
        width: '100px',
        heigth: '150px',
    }
}))


