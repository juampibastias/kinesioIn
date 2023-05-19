import React from 'react'
import styled from 'styled-components'
import imgLogo from "../assets/logoKinesio.png"

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () => {
  return (
    <LogoText>
        <img src= {imgLogo} style={{width: "80px", height:"80px", marginTop:"20px"}} alt='img' />
    </LogoText>
  )
}

export default Logo