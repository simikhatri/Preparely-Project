import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Grid, Stack } from '@mui/material';
import {
    StyledBox, HeadText, Paragraph, StyledStack, StyledButton,
    Styledbox, StyledTypography, Image, StyledGrid, Styledtypography,
    StyledDiv, Headtext, Imag, Img, MainGrid
} from '../style/Description';
import Testmonial from './Testmonial';
import google from '../assets/images/google.png';
import phone from '../assets/images/phone.png';
import logo2 from '../assets/images/Rectangle 157.png';
import logo3 from '../assets/images/Vector Smart Object Image.png';
import logo1 from '../assets/images/logo4.png';
import logo7 from '../assets/images/logo7.png';
import '../style/scroll.css';
import Rating from './Rating';

const Description = () => {
    return (
        <>
            <StyledBox>
                {/* Grid Container */}
                <MainGrid container spacing={1}>
                    {/* First Row */}
                    <Grid item lg={6} md={7} sm={7} xs={12}>
                        <HeadText varient='h2'>
                            Download Our Mobile App
                        </HeadText>
                        <Paragraph>
                            Top Level You can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages.
                            Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.
                        </Paragraph>
                        <StyledStack direction='row' spacing={1}>
                            <Imag src={google} alt="" />
                            <StyledButton variant="contained"
                                disableElevation
                                disableRipple
                                endIcon={<DownloadIcon />}>Download</StyledButton>
                        </StyledStack>
                        <StyledDiv>
                            <Headtext varient='h2'>
                                Few Facts About Our Website
                            </Headtext>
                            <Paragraph>
                                Preparely is offering various mockup tests with each subject for each module. It
                                provides flexible
                                practice mockup tests. Preparely is offering various mockup tests with each subject for each module. It
                                provides flexible
                                practice mockup tests.
                            </Paragraph>
                        </StyledDiv>
                    </Grid>
                    {/* Second Row */}
                    <StyledGrid item lg={3} >
                        <img src={phone} alt="" />
                    </StyledGrid>
                    {/* Third Row */}
                    <Grid item lg={3} md={5} sm={5} xs={12}>
                        <Stack direction='row' spacing={2.5}>
                        <Styledbox>
                            <Image src={logo1} alt="" />
                            <StyledTypography varient='h6'>National Testing Service</StyledTypography>
                        </Styledbox>
                        <Styledbox>
                            <Image src={logo1} alt="" />
                            <StyledTypography varient='h6'>National Testing Service</StyledTypography>
                        </Styledbox>
                        </Stack>
                        <Stack direction='row' spacing={2.5}>
                        <Styledbox>
                            <Img src={logo3} alt="" />
                            <Styledtypography varient='h6'>National Medical Dental College Admission Test</Styledtypography>
                        </Styledbox>
                        <Styledbox>
                            <Img src={logo3} alt="" />
                            <Styledtypography varient='h6'>National Medical Dental College Admission Test</Styledtypography>
                        </Styledbox>
                        </Stack>
                        <Stack direction='row' spacing={2.5}>
                        <Styledbox>
                            <Img src={logo2} alt="" />
                            <StyledTypography varient='p'>Public Service Commision</StyledTypography>
                        </Styledbox>
                        <Styledbox>
                            <Img src={logo2} alt="" />
                            <StyledTypography varient='p'>Public Service Commision</StyledTypography>
                        </Styledbox>
                        </Stack>
                        <Stack direction='row' spacing={2.5}>
                        <Styledbox>
                            <Image src={logo7} alt="" />
                            <StyledTypography varient='p'>Army, Navy Air Force</StyledTypography>
                        </Styledbox>
                        <Styledbox>
                            <Image src={logo7} alt="" />
                            <StyledTypography varient='p'>Army, Navy Air Force</StyledTypography>
                        </Styledbox>
                        </Stack>

                </Grid>
            </MainGrid>
            <Rating />
            <Testmonial />
        </StyledBox >
            
           
        </>
    )
}

export default Description
