import React from 'react'
import styled from 'styled-components'

const Block = styled.div`

width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;

`

const BlogComponent = () => {
  return (
    <Block to="/">
        
    blog items

    </Block>
  )
}

export default BlogComponent