import React from 'react'
import { Grid, Checkbox, InputAdornment } from '@mui/material'
import {
    StyledBox, Heading, StyledText, Label, StyledField,
    Div, SignUp, Text, Span, Image, DownloadBox, StyledStack,
    HeadText, Paragraph, StyledButton, Imag, Box1} from '../style/Rgister';
import MobileApp from './MobileApp';
import DownloadIcon from '@mui/icons-material/Download';
import image from "../assets/images/pro.png";
import email from "../assets/images/email.png";
import password from "../assets/images/password.png";
import phone from '../assets/images/phone.png'
import google from '../assets/images/google.png';

const RegisterForm = () => {
    return (
        <>
            <StyledBox>
                <Heading>Register your Account</Heading>

                <Grid container spacing={1}>
                    {/* first row */}
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <StyledText
                            variant="h5">
                            Sign Up
                        </StyledText>
                        <Label> First Name</Label>
                        <StyledField
                            hiddenLabel
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                    border: 'none'
                                },
                                endAdornment: (
                                    <InputAdornment
                                        // sx={{
                                        //     padding: "27.5px 14px",
                                        //     backgroundColor: (theme) => theme.palette.divider,
                                        //     borderTopLeftRadius: (theme) =>
                                        //       theme.shape.borderRadius + "px",
                                        //     borderBottomLeftRadius: (theme) =>
                                        //       theme.shape.borderRadius + "px"
                                        //   }}
                                        position="end"  >
                                        <img src={image} alt="" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Label> Last Name</Label>
                        <StyledField
                            hiddenLabel
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                    border: 'none'
                                },
                                endAdornment: (
                                    <InputAdornment position="end"  >
                                        <img src={image} alt="" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Label> Email</Label>
                        <StyledField
                            hiddenLabel
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                    border: 'none'
                                },
                                endAdornment: (
                                    <InputAdornment position="end"  >
                                        <img src={email} alt="" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Label> Password</Label>
                        <StyledField
                            hiddenLabel
                            InputProps={{
                                style: {
                                    borderRadius: '15px',
                                    border: 'none'
                                },
                                endAdornment: (
                                    <InputAdornment position="end"  >
                                        <img src={password} alt="" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Div>
                            <Checkbox color="default" />
                            By Click Check Box You Will Get daily Updates And Special Offers
                        </Div>

                        <Box1>
                          <SignUp variant="contained">Sign Up</SignUp>
                            <Text variant='h6'>Already Registered?
                                <Span > Please Log in</Span> </Text>
                        </Box1>

                    </Grid>
                    {/* second row */}
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Image>
                            <img src={phone} alt="" />
                        </Image>
                        <DownloadBox>
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
                        </DownloadBox>
                    </Grid>
                </Grid>

            <MobileApp/>
            </StyledBox>

        </>
    )
}

export default RegisterForm
