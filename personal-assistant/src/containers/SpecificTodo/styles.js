import styled from 'styled-components'

export const Todo = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    margin-right: auto;
    margin-left: auto;
    font-size: 50px;
    color: #4e5c4e;
    width: 80vw;
    overflow-wrap: break-word;
`

export const DescBox = styled.textarea`
    width: 900px;
    height: 400px;
    font-size: 30px;
    padding: 40px;
    resize: none;
    border-radius: 10px;
    border: #b8e2c8 inset 2px;
    color: #4e5c4e;
    background-color: #b8e2c8;
    font-family: "Lucida Console", "Courier New", monospace;

    @media (max-width: 900px) {
        width: 80vw;
        font-size: 25px;
    }
`

export const ImgBox = styled.img`
    border: #5c826b outset 4px;
    border-radius: 10px;
    width: 700px;
  
    @media (max-width: 970px) {
        width: 70vw;
    }
`