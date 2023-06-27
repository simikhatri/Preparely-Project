import React from 'react';
import {Grid } from '@mui/material'
import {StyledBox , Styledgrid, StyledGrid, StyledTypography,
  Image, Styledtypography} from '../style/Hero'
import image from "../assets/images/Group 9072.png"

const Hero = () => {
   return (
    <>
      <StyledBox>
        <Grid container spacing={2}>
          <StyledGrid item lg={8} md={8} sm={8} xs={7}>
            <StyledTypography variant='h4'>
              Preparely
            </StyledTypography>
            <Styledtypography variant='p'>
              A New Way To Learn <br/>
              Learn Through Video Lessons, <br/>
              Pdf Documents, Mock Up <br/>
              Exams And Mcqs.
            </Styledtypography>
          </StyledGrid>
          <Styledgrid item lg={4} md={4} sm={4} xs={5}>
           <Image src={image} alt="" />
          </Styledgrid>

</Grid>

      </StyledBox>
    </>
  )
}

export default Hero
