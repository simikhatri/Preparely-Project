import React from 'react';
import {
    StyledBox, Heading, StyledDiv, Image, StyledPara, Div, StyledTypo,
    Styledbox, StackBox
} from './Regtestmonial';
import person1 from './Avatar/person1.png';
import person2 from './Avatar/person2.png';
import person3 from './Avatar/person3.png';
import '../slider/style.css';

const RegisterTestmonial = () => {
    return (
        <>

            <Styledbox>
                <Heading>Testmonials</Heading>
            </Styledbox>
            <StyledBox>
                <StackBox>
                    <StyledDiv>
                        <Image src={person3} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                    <StyledDiv>
                        <Image src={person3} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                    <StyledDiv>
                        <Image src={person1} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                    <StyledDiv>
                        <Image src={person2} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                    <StyledDiv>
                        <Image src={person3} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                    <StyledDiv>
                        <Image src={person3} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                    <StyledDiv>
                        <Image src={person3} alt=''></Image>
                        <StyledTypo>Name</StyledTypo>
                        <Div>
                            <StyledPara>Lorem Ipsum is simply dummy textof the printing and typesetting industry.</StyledPara>
                        </Div>
                    </StyledDiv>
                </StackBox>
            </StyledBox>

        </>
    )
}

export default RegisterTestmonial
