import React from 'react'
import {NavLink} from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube} from '../components/AllSvgs'
import styled from 'styled-components'
import {darkTheme} from '../components/Themes'

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

`

const Icons = styled.div`

display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const SocialIcon = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <Github width={30} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <Twitter width={30} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <Facebook width={30} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <YouTube width={30} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
            </NavLink>
        </div>

        <Line color={props.theme}/>
    </Icons>
  )
}

export default SocialIcon