import styled from 'styled-components'


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