import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const StyledCard = styled.div`
width: 100%;
background-color: white;
max-width: 80%;
margin: 0 auto;
h1{
    font-size: 3rem;
    text-transform: capitalize;
}
`
const StyledBody= styled.div`
font-size: 2rem;
color: black;

`
const StyledAuthor = styled.div`
font-size: 2rem;
text-transform: capitalize;
`
const Post = ({node}) => {
    const {  title, body,author ,comments} = node
var size = 2;

    return (
        <StyledCard>
            <article>
<h1>{title}</h1>
<StyledBody>{body}</StyledBody>
<StyledAuthor>{author.name}</StyledAuthor>
            </article>
{comments.slice(0,size).map(i =>{
    console.log(i);
    return             <Comment>{i.body}</Comment>

})

}

        </StyledCard>
    )
}

export default Post
