import { Box, Typography, styled, TextField, Button, Stack } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #004A80 25.31%, rgba(255, 255, 255, 0.58) 60.21%)',
  padding: '2rem 1rem 2rem 2rem',
}))
export const Div = styled("div")(({ theme }) => ({
  marginLeft: '7rem',
  display: 'block',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '12px',
  color: '#FFFFFF',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '2rem',
   },
   [theme.breakpoints.down("sm")]: {
    marginLeft: '1rem',
   }, 
   [theme.breakpoints.down("430")]: {
    marginLeft: '0',
    fontSize: '8px',
   },
   [theme.breakpoints.down("300")]: {
    fontSize: '5px',
   },
}))
export const Heading = styled(Typography)(({ theme }) => ({
  marginLeft: '7rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: ' 40px',
  lineHeight: '61px',
  color: '#000000',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '2rem',
   },
   [theme.breakpoints.down("sm")]: {
    marginLeft: '1rem',
    fontSize: ' 29px',
   } ,
   [theme.breakpoints.down("430")]: {
    marginLeft: '0',
    fontSize: ' 27px',
   },
   [theme.breakpoints.down("386")]: {
    fontSize: ' 20px',
   },
   [theme.breakpoints.down("290")]: {
    fontSize: ' 18px',
   }

}))
export const StyledText = styled(Typography)(({ theme }) => ({
  margin: '2rem 0 2rem 7.2rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: ' 45px',
  lineHeight: '61px',
  color: '#ffffff',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '2rem',
   },
   [theme.breakpoints.down("sm")]: {
    marginLeft: '1.7rem',
    fontSize: ' 37px',
   } ,
   [theme.breakpoints.down("430")]: {
    marginLeft: '0',
   }

}))
export const StyledField = styled(TextField)(({ theme }) => ({
  marginLeft: '7rem',
  backgroundColor: '#F1E9E9',
  width: '80%',
  borderRadius: '15px',
  marginBottom: '1rem',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '2rem',
   },
   [theme.breakpoints.down("md")]: {
    width: '90%',
   },
   [theme.breakpoints.down("sm")]: {
    width: '92%',
    marginLeft: '1rem',
   },
   [theme.breakpoints.down("430")]: {
    marginLeft: '0',
    width: '95%',
   },
}))
export const Label = styled(Typography)(({ theme }) => ({
  margin: '0 0 0.5rem 7.6rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: ' 20px',
  lineHeight: '24px',
  color: '#ffffff',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '2.3rem',
   },
   [theme.breakpoints.down("430")]: {
    marginLeft: '0.2rem',
    width: '95%',
   },
}))
export const SignUp = styled(Button)(({ theme }) => ({
  width: '289px',
  height: '38px',
  background: 'background: rgb(0, 74, 128)',
  borderRadius: '20px',
  marginLeft: '14rem',
  marginTop: '1rem',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '5.5rem',
   },
   [theme.breakpoints.down("915")]: {
    marginLeft: '5rem',
   },
   [theme.breakpoints.down("md")]: {
    marginLeft: '1rem',
   },
   [theme.breakpoints.down("sm")]: {
    marginLeft: '0',
   }, 
   [theme.breakpoints.down("430")]: {
    width: '200px',
   },
   [theme.breakpoints.down("300")]: {
    width: '150px',
   },
}))
export const Text = styled(Typography)(({ theme }) => ({
  marginLeft: '11.5rem',
  marginTop: '1rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: ' 20px',
  lineHeight: '24px',
  color: '#ffffff',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '3.6rem',
   },
   [theme.breakpoints.down("915")]: {
    marginLeft: '3rem',
   },
   [theme.breakpoints.down("md")]: {
    marginLeft: '1rem',
   },
   [theme.breakpoints.down("sm")]: {
    marginLeft: '0',
    fontSize: ' 18px',
   } ,
   [theme.breakpoints.down("430")]: {
    fontSize: ' 14px',
   },
   [theme.breakpoints.down("300")]: {
    fontSize: '12px',
   },
}))
export const Span = styled("span")(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: ' 20px',
  lineHeight: '24px',
  color: '#000000',
  cursor: 'pointer',
  [theme.breakpoints.down("430")]: {
    fontSize: ' 14px',
   },
   [theme.breakpoints.down("300")]: {
    fontSize: '12px',
   },
}))
export const Image = styled(Box)(({ theme }) => ({
  margin: '2rem 6rem 4rem 0',
  textAlign: 'right',
  [theme.breakpoints.down("md")]: {
   display: 'none',
   }
}))

export const DownloadBox = styled(Box)(({ theme }) => ({
  marginLeft: '6rem',
  [theme.breakpoints.down("1025")]: {
    marginLeft: '0.2rem',
   },
   [theme.breakpoints.down("md")]: {
    textAlign: 'center',
    marginTop: '2rem',
    marginLeft: '1rem',
   },
   [theme.breakpoints.down("sm")]: {
    marginLeft: '0',
   }
}))
export const StyledStack = styled(Stack)(({ theme }) => ({
  margin: " 1rem 0 0 6rem",
  [theme.breakpoints.down("1281")]: {
 margin: " 1rem 0 0 0",
},
 [theme.breakpoints.down("md")]: {
  padding: " 0 0 0 4rem",
},
[theme.breakpoints.down("sm")]: {
  padding: " 0 0 0 2rem",
},
[theme.breakpoints.down("520")]: {
  padding: " 0 0 0 0",
}
}))
export const HeadText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '34px',
  [theme.breakpoints.down("1025")]: {
    lineHeight: '14px',
    fontSize: '22px',
},
  [theme.breakpoints.down("md")]: {
      fontSize: '24px',
  },
  [theme.breakpoints.down("sm")]: {
      fontSize: '18px',
      lineHeight: '20px',
  },
  [theme.breakpoints.down("430")]: {
      fontSize: '15px',
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
  [theme.breakpoints.down("1025")]: {
    width: '97%',
    fontWeight: '400',
    fontSize: '19px',
    lineHeight: '20px',
},
  [theme.breakpoints.down("md")]: {
      width: '90%',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
  },
  [theme.breakpoints.down("sm")]: {
      width: '98%',
      fontSize: '15px',
      lineHeight: '20px',
  },
  [theme.breakpoints.down("430")]: {
      fontSize: '10px',
      lineHeight: '12px',
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
  [theme.breakpoints.down("430")]: {
      fontSize: '10px',
      width: '100px',
      height: '35px',
  }
}))
export const Imag = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("430")]: {
      width: '110px',
      height: '35px',
  }
}))
export const Box1 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
     textAlign: 'center',
  }
}))