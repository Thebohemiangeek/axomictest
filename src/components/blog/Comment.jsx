import React from 'react'
import styled from 'styled-components'
const StyledText = styled.div`
font-size: 2rem;
color: darkgray;
`
const Comment = ({children}) => {
    return (
        <StyledText>
            {children}
        </StyledText>
    )
}

export default Comment
