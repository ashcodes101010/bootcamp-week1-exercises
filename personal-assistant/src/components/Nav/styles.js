import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navigation = styled.nav`
    background-color: #e6faec;
    overflow: hidden;
`

export const NavLink = styled(Link)`
    float: left;
    color: #6b6b6b;
    text-align: center;
    padding: 20px 16px;
    text-decoration: none;
    font-size: 30px;
    transition: background-color 0.15s;

    &:hover {
        background-color: #caded0;
    }

    &:active {
        background-color: #b0a1ba;
        color: white;
    }
`