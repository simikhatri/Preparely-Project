import * as React from 'react';
import Box from '@mui/material/Box';
import { InputAdornment, Grid, Checkbox } from '@mui/material';
import Modal from '@mui/material/Modal';
import {
    Styledbutton, Image
} from '../style/Appbar';
import {
    StyledBox, StyledDiv, LogoBox, MainDiv, Heading, StyledField,
    Label, LoginButton, BtnBox, StyledGrid, StyledTypo, Img
} from '../style/Login';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import title from '../assets/images/title.png'
import email from "../assets/images/email.png";
import password from "../assets/images/password.png";

const Login = ({ open, onClose }) => {
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
                            <LoginButton
                            // onClick={close}
                            >Log In</LoginButton>
                        </BtnBox>

                    </MainDiv>

                </StyledBox>
            </Modal>
        </>
    )
}

export default Login
