import React from 'react';
import { Stack } from '@mui/material';
import {StyledBox,Styledbox,  StyledTypography, Image, StyledImage,
  StyledDiv } from '../style/Scroll';
  import '../style/scroll.css';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/Rectangle.png';
import logo7 from '../assets/images/logo7.png';

const Scroll = () => {
    return (
        <>
        <StyledDiv  className='ScrollBox'> 
            <Styledbox >
                <Stack direction="row" spacing={16}>
                  <StyledBox>
                    <Image src={logo1} alt="" />
                    <StyledTypography varient='h6'>PUBLIC SERVICE COMMISSION</StyledTypography>
                  </StyledBox>
                  <StyledBox>
                    <img src={logo2} alt="" />
                    <StyledTypography varient='h6'>ENGLISH PROFICENCY TEST</StyledTypography>
                  </StyledBox>
                  <StyledBox>
                    <Image src={logo3} alt="" />
                    <StyledTypography varient='h6'>ENGINEERING ENTRANCE TEST</StyledTypography>
                  </StyledBox>
                  <StyledBox>
                    <StyledImage src={logo4} alt="" />
                    <StyledTypography varient='h6'>NATIONAL TESTING SERVICE</StyledTypography>
                  </StyledBox>
                  <StyledBox>
                    <img src={logo5} alt="" />
                    <Image src={logo6} alt="" sx={{margin: '0 2rem 0 0'}} />
                    <StyledTypography varient='h6'>CAMBRIDGE INTERNATIONAL</StyledTypography>
                  </StyledBox>
                  <StyledBox>
                    <StyledImage src={logo7} alt="" />
                    <StyledTypography varient='h6'>JOIN FORCES</StyledTypography>
                  </StyledBox>
                </Stack>
            </Styledbox>
            </StyledDiv> 
        </>
    )
}

export default Scroll
