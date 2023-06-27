import React from 'react';
import { StyledStack, StyledDiv, StyledText, Span } from '../style/Rating'

const Rating = () => {
    return (
        <>
            <StyledStack direction='row' spacing={12}>
                <StyledDiv>
                    <StyledText> TOTAL<br/> COURSES </StyledText>
                    <Span>+25</Span>
                </StyledDiv>
                <StyledDiv>
                    <StyledText> HD<br/> VIDEOS </StyledText>
                    <Span>+100</Span>
                </StyledDiv>
                <StyledDiv>
                    <StyledText> TOTAL <br/> REACH </StyledText>
                    <Span>+2.6k</Span>
                </StyledDiv>
                <StyledDiv>
                    <StyledText> REGISTERED USERS</StyledText>
                    <Span>+1.3k</Span>
                </StyledDiv>
            </StyledStack>

        </>
    )
}

export default Rating
