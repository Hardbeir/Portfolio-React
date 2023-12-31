import React from 'react'
import {NavLink} from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube} from '../components/AllSvgs'
import styled from 'styled-components'

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text};

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

const SocialIcon = () => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <Github width={30} height={25}/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <Twitter width={30} height={25}/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <Facebook width={30} height={25}/>
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:"https/"}}>
                <YouTube width={30} height={25}/>
            </NavLink>
        </div>

        <Line />
    </Icons>
  )
}

export default SocialIcon