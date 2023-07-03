import React from 'react';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png'
import {
  StyledBox, Heading, Paragraph, StyledDiv, Styleddiv,
  Image, StyledTypo, StyledContainer, StyledPara, StyledStack
} from '../style/Testominal';

const Testmonial = () => {
  return (
    <StyledBox>
      <Heading>
        Testmonials
      </Heading>
      <Paragraph>
        Preparely is offering various mockup tests with each subject for each module. It
        provides flexible
        practice mockup tests.
      </Paragraph>
      <Styleddiv>
        <StyledStack direction='row' spacing={10}>
          <StyledDiv>
            <Image src={person1} alt=''></Image>
            <StyledTypo>Name</StyledTypo>
            <StyledContainer>
              <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
            </StyledContainer>
          </StyledDiv>
          <StyledDiv>
            <Image src={person2} alt=''></Image>
            <StyledTypo>Name</StyledTypo>
            <StyledContainer>
              <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
            </StyledContainer>
          </StyledDiv>
          <StyledDiv>
            <Image src={person3} alt=''></Image>
            <StyledTypo>Name</StyledTypo>
            <StyledContainer>
              <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
            </StyledContainer>
          </StyledDiv>
        </StyledStack>
      </Styleddiv >
    </StyledBox>

  )
}

export default Testmonial
