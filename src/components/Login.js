import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputAdornment, Grid, Checkbox } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Image } from '../style/Appbar';
import {
    StyledBox, StyledDiv, LogoBox, MainDiv, Heading, StyledField,
    Label, LoginButton, BtnBox, StyledGrid, StyledTypo, Img
} from '../style/Login';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import title from '../assets/images/title.png'
import email from "../assets/images/email.png";
import password from "../assets/images/password.png";
import { useNavigate  } from 'react-router-dom';

const Login = ({ open, onClose}) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const onChange= (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }
      const clear= (e) => {
        setCredentials({email: "", password: ""})
      }
     
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Make API call to authenticate user with email and password
        try {
          const response = await fetch('http://preparelyapi.aasecurityforce.com/preparely/user/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
    
          if (response.ok) {
            // Handle successful login
            const data = await response.json();
            console.log('Logged in successfully!', data);
            onClose();
            navigate("/home");
            clear();
          } else {
            // Handle failed login
            alert('Invalid Credentials');
          }
        } catch (error) {
          console.error('Error logging in', error);
        }
      };
    return (
        <>
            <Modal
                open={open} onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledBox >
                    <StyledDiv>
                        <LogoBox><Image src={logo} alt="Preparely" /></LogoBox>
                        <Box mr={1}>
                            <Img src={title} alt="" />
                        </Box>
                    </StyledDiv>
                    <MainDiv>
                        <Heading>Login To Your Account</Heading>
                        <Label> Email</Label>
                        <form onSubmit={handleSubmit}>
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
                            <Grid container spacing={2}>
                                <Grid item lg={3} md={4} sm={5} xs={6}>
                                    <StyledTypo> <Checkbox
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                        defaultChecked /> Remember Me</StyledTypo>
                                </Grid>
                                <StyledGrid item lg={3} md={4} sm={5} xs={6}>
                                    <Link id='link' to='/'>Froget Password?</Link>
                                </StyledGrid>
                            </Grid>
                            <BtnBox>
                                <LoginButton type="submit"
                                >Log In</LoginButton>
                            </BtnBox>
                        </form>
                    </MainDiv>

                </StyledBox>
            </Modal>
        </>
    )
}

export default Login
