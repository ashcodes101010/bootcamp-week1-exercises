import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Delete = styled.button`
    width: 23px;
    height: 23px;
    font-size: 20px;
    text-align: center;
    color: black;
    opacity: 0.5;
    border: none;
    background-color: transparent;
    margin-left: 10px;
    transition: color 0.15s, opacity 0.15s, font-size 0.15s, width 0.15s, height 0.15s;
    transition-delay: 0.05s;
   
    &:hover {
        width: 25px;
        height: 25px;
        opacity: 1;
        color: crimson;
        font-size: 25px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #63737d;
    transition: color 0.15s, font-size 0.15s;

    &:hover {
        color: #5f819e;
        font-size: 33px;
    }
`