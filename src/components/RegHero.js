import React from 'react'
import {Grid } from '@mui/material'
import {StyledBox , Styledgrid, StyledGrid, StyledTypography,
   Styledtypography, Image} from '../style/Hero'
import Register from "../assets/images/register.png"

const RegHero = () => {
  return (
    <>
       <StyledBox>
        <Grid container spacing={2}>
          {/* first Row */}
          <StyledGrid item lg={8} md={8} sm={7}>
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
          {/* Second Row */}
          <Styledgrid item lg={4} md={4} sm={5}>
           <Image src={Register} alt="" />
          </Styledgrid>

</Grid>

      </StyledBox> 
    </>
  )
}

export default RegHero
