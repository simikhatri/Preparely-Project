import React from 'react';
import { StyledBox,StyledDiv, Heading, Paragraph } from '../style/ChooseExam';

const ChooseExam = () => {
    return (
        <>
            <StyledBox>
                <StyledDiv>
                    <Heading variant='h5'>
                        Choose Your Exam
                    </Heading>
                    <Paragraph variant='p'>
                        Improve your knowledge by using our examination’s <br/>
                        systematic learning technique.<br/>
                        Select a field of study.<br/>
                        <br/>
                    </Paragraph>
                    <Paragraph variant='p'>
                        Improve your knowledge by using our examination’s<br/>
                        systematic learning technique.<br/>
                        Select a field of study.
                    </Paragraph>
                </StyledDiv>
            </StyledBox>

        </>
    )
}

export default ChooseExam
