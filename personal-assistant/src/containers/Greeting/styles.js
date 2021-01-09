import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Welcome = styled.div`
    width: 530px;
    height: 130px;
    font-size: 31px;
    border-radius: 10px;
    border: #b8e2c8 outset 2px;
    color: #4e5c4e;
    background-color: #b8e2c8;
    padding: 70px;
    text-align: left;
    margin: auto;
    margin-bottom: 50px;

    @media (max-width: 700px) {
        width: 70vw;
        font-size: 25px;
    }
`

export const StyledLink = styled(Link)`   
    text-decoration: none;
    color: #7c6c87;
    transition: color 0.15s, font-size 0.15s;

    &:hover {
        color: #B0A1BA;
        font-size: 32px;
    }
`

export const Loading = styled.p`
    text-align: center;
    font-size: 20px;
`