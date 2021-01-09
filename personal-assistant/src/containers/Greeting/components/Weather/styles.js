import styled from 'styled-components'

export const Forecast = styled.div`
    width: 530px;
    height: 300px;
    font-size: 31px;
    border-radius: 10px;
    border: #bee1e8 outset 2px;
    color: #5b7a80;
    background-color: #bee1e8;
    padding: 60px;
    text-align: left;
    margin: auto;

    @media (max-width: 700px) {
        width: 70vw;
        font-size: 25px;
        
    }
`