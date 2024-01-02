import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from './Themes'
import {Design, Develope} from './AllSvgs'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import PowerButton from '../subComponents/PowerButton'
import ParticlesComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`

background-color:  ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`

const Main = styled.div`

border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;  
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}

`

const Title = styled.h2`

  display: flex;
  justify-content: center;
  gap: 2%;
  align-items: center;
  font-size:  calc(1em + 1vw);

${Main}:hover &{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  &>*{
    fill: ${props => props.theme.body};
  }
}

`
const Description = styled.div`

color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}

ul, p{
  margin-left: 2rem;
}

${Main}:hover &{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}

`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

      <Box>

        
        <PowerButton />
        <LogoComponent theme={'light'} />
        <SocialIcon  theme={'light'}  />
        <ParticlesComponent theme='light'/>

        <Main>

    <Title>

    <Design width={40} height={40} /> Designer
      
    </Title>

    <Description>
    I love to create design which speaks, Keep it clean, minimal and simple.
    </Description>

    <Description>
      <strong>I like to Design</strong>
      <ul>
        <li>Web Design</li>
        <li>Mobile Apps</li>
      </ul>
    </Description>

    <Description>
      <strong>Tools</strong>
      <ul>
        <li>Figma</li>
        <li>Photoshop & Illustrator</li>
      </ul>
    </Description>

        </Main>
        
        <Main>

          <Title>

          <Develope width={40} height={40} /> Front-end

          </Title>

          <Description>
          I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>

          <Description>
      <strong>Skills</strong>

      <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>

    </Description>

    <Description>
      <strong>Tools</strong>
      <p>VScode, Github, Codepen etc.</p>
    </Description>

        </Main>

        <BigTitle text="SKILLS" top="80%" left="30%"/>

      </Box>


    </ThemeProvider>

  )
}

export default MySkillsPage