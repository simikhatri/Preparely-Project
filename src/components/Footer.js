import React from 'react'
import {
    StyledBox, StyledDiv, Styleddiv, Image, StyledTypography, StyledStack,
    ExamHeading, Item, StyledGrid, LogoImage, SGrid
} from '../style/Footer';
import { Grid, List, Box } from '@mui/material';
import logo from '../assets/images/llogo.png';
import whatsapp from '../assets/images/whatsapp.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/Facebook.png';
import linkedin from '../assets/images/link.png';

const Footer = () => {
    return (
        <>
            <StyledBox>
                <Grid container spacing={2}>
                    <StyledGrid item lg={3} md={3} sm={3} xs={4}>
                        <StyledDiv>
                            <LogoImage src={logo} alt="Preparely" />
                        </StyledDiv>
                    </StyledGrid>
                    <StyledGrid item lg={3} md={3} sm={3} xs={8}>
                        <Styleddiv>
                            <StyledStack direction="row" spacing={1.2}>
                                <Image src={whatsapp} alt="whatsapp" />
                                <Image src={twitter} alt="twitter" />
                                <Image src={facebook} alt="facebook" />
                                <Image src={linkedin} alt="linkedin" />
                            </StyledStack>
                            <StyledTypography>
                                A New Way To Learn
                            </StyledTypography>
                        </Styleddiv>
                    </StyledGrid>
                    <SGrid item xs={1}></SGrid>
                    <Grid item lg={3} md={3} sm={3} xs={5}>
                        <Box>
                            <ExamHeading varient='h6'>
                                Exams
                            </ExamHeading>
                            <List>
                                <Item>MDCAT</Item>
                                <Item>KPPSC</Item>
                                <Item>NUMS </Item>
                                <Item> ETEA </Item>
                                <Item>NTS</Item>
                                <Item> JOIN FORCES </Item>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <ExamHeading varient='h6'>
                            Preparely
                        </ExamHeading>
                        <List>
                            <Item>About Us</Item>
                            <Item>Contact Us</Item>
                            <Item>Terms And Conditions</Item>
                            <Item>Privacy Policy</Item>
                            <Item>Careers</Item>
                        </List>
                    </Grid>
                </Grid>
            </StyledBox>
        </>
    )
}

export default Footer
