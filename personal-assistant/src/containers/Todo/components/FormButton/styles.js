import styled from 'styled-components'

export const MainButton = styled.button`
    width: 100px;
    height: 55px;
    background-color: #b8e2c8;
    color: #046955;
    font-size: 16px;
    transition: background-color 0.12s, width 0.12s ease-in, height 0.12s ease-in;
    transition-delay: 0.12s;
    border-radius: 10px;
    border: outset #88b598 2px;

    &:hover {
        width: 105px;
        height: 57.75px;
        background-color: #bff0d4;
    }
`