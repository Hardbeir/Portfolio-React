import React, { useState } from 'react'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcon from '../subComponents/SocialIcon'

import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'
import { Anchor } from './AllSvgs'
import AnchorComponent from '../subComponents/AnchorComponent'
import { useEffect } from 'react'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`

background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

`

const Container = styled.div`

background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
width: 100%;
height: auto;

position: relative;
padding-bottom: 5rem;

`

const Center = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;

`

const Grid = styled.div`

display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 10vw), 1fr));
grid-gap: calc(1rem + 2vw);

`

const BlogPage = () => {

  const [numbers, setNumbers] = useState(0)

  useEffect(() => {

    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));

  }, [])


  const container = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition:{
            type:'spring',
            duration: 0.5
        }
    }
}

  return (
    <MainContainer
    variants={container}
    initial='hidden'
    animate='show'
    exit={{
      opacity:0, transition:{duraction: 0.5}
    }}
    >

    <Container>
      <LogoComponent/>
      <PowerButton/>
      <SocialIcon/>
      <AnchorComponent  numbers={numbers}/>

      <Center>

        <Grid>

          {
            Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={blog}/>
            })
          }

        </Grid>

      </Center>
    
    <BigTitle text="BLOG" top="5rem" left="5rem" />

    </Container>

    </MainContainer>
  )
}

export default BlogPage