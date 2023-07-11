import React, {useState} from 'react'
import { Grid, Checkbox, InputAdornment } from '@mui/material'
import {
    StyledBox, Heading, StyledText, Label, StyledField,
    StyledDiv, SignUp, Text, Span, Image, DownloadBox, StyledStack,
    HeadText, Paragraph, StyledButton, Imag, Box1} from '../style/Rgister';
import MobileApp from './MobileApp';
import DownloadIcon from '@mui/icons-material/Download';
import image from "../assets/images/pro.png";
import email from "../assets/images/email.png";
import password from "../assets/images/password.png";
import phone from '../assets/images/phone.png'
import google from '../assets/images/google.png';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [credentials, setCredentials] = useState({  firstName: '', lastName: '', phonenumber: '', email: '', password: ''});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const clear = (e) => {
        setCredentials({firstName: "", lastName: "", phonenumber: "", email: "", password: "" })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Make API call to authenticate user with email and password
        try {
            const response = await fetch('http://preparelyapi.aasecurityforce.com/preparely/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({firstName: credentials.firstName, lastName: credentials.lastName, phonenumber: credentials.phonenumber, email: credentials.email, password: credentials.password })
            });
            if (response.ok) {
                // Handle successful login
                const data = await response.json();
                console.log('Registered successfully!', data);
                navigate("/home");
                clear();
            } else {
                // Handle failed login
                alert('Registration failed');
            }
        } catch (error) {
            console.log('Error registering', error);
        }
    };
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
                        <form onSubmit={handleSubmit}>
                        <Label> First Name</Label>
                        <StyledField
                         name="firstName"
                         value={credentials.firstName} onChange={onChange}
                         required
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
                          name="lastName"
                          value={credentials.lastName} onChange={onChange}
                          required
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
                         <Label> Phone No.</Label>
                        <StyledField
                          name="phonenumber"
                          value={credentials.phonenumber} onChange={onChange}
                          required
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
                          name="email"
                          value={credentials.email} onChange={onChange}
                          required
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
                          name="password"
                          value={credentials.password} onChange={onChange}
                          required
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
                        <StyledDiv>
                            <Checkbox color="default" />
                            By Click Check Box You Will Get daily Updates And Special Offers
                        </StyledDiv>

                        <Box1>
                          <SignUp variant="contained" type="submit">Sign Up</SignUp>
                            <Text variant='h6'>Already Registered?
                                <Span onClick={handleOpen}> Please Log in</Span> </Text>
                        </Box1>
                        </form>
                        <Login open={open} onClose={handleClose} />

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
