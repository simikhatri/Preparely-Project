import React from 'react'
import { Box } from '@mui/material'
import {
    StyledBox, StyledDiv, Image, TextBox, Heading, Paragraph, StyledrightBox,
    StyledrightDiv, RightBox, RightTextBox
} from '../style/Services'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/imag2.png'
const Services = () => {
    return (
        <>
            <Box sx={{ margin: '0 0 4rem 0' }}>
                <StyledBox />
                <StyledDiv>
                    <Image src={image1} alt="" />
                </StyledDiv>
                <TextBox>
                    <Heading variant='h6'>
                        MCQS PREPARATION
                    </Heading>
                    <Paragraph variant='p'>Preparely has related mcqs section for every chapter.<br />
                        Students can practice to get an eye on preparation level<br />
                        of theirs at the end of every chapter.</Paragraph>
                </TextBox>
            </Box>
            <RightBox>
                <StyledrightBox />
                <StyledrightDiv>
                    <Image src={image2} alt="" />
                </StyledrightDiv>
                <RightTextBox>
                    <Heading variant='h6'>
                        Online Videos Lessons
                    </Heading>
                    <Paragraph variant='p'>Preparely provides
                        students with an option of live<br /> ineractive sessions in which students can join to learn<br /> more professionally.
                        Practical work enhaces the<br />learning ability.
                    </Paragraph>
                </RightTextBox>
            </RightBox>
            <Box sx={{ margin: '4rem 0 0 0' }}>
                <StyledBox />
                <StyledDiv>
                    <Image src={image1} alt="" />
                </StyledDiv>
                <TextBox>
                    <Heading variant='h6'>
                        Mock Up Exam Preparation
                    </Heading>
                    <Paragraph variant='p'>Preparely is offering various mockup tests with each<br /> subject for each module. It
                        provides flexible practice<br /> mockup tests. </Paragraph>
                </TextBox>
            </Box>
            <RightBox sx={{ margin: '4rem 0 0 0' }}>
                <StyledrightBox />
                <StyledrightDiv>
                    <Image src={image2} alt="" />
                </StyledrightDiv>
                <RightTextBox>
                    <Heading variant='h6'>
                    PDF Preparation 
                    </Heading>
                    <Paragraph variant='p'>Preparely has related mcqs section for every chapter. <br />
                     ineractive sessions in which students can join to learn<br />
                      more professionally. Practical work enhaces the<br />learning ability.
                    </Paragraph>
                </RightTextBox>
            </RightBox>
        </>
    )
}

export default Services
