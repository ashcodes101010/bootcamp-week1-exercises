import styled from 'styled-components'


export const Todos = styled.div`
    font-size: 30px;
    text-align: center;
    overflow-wrap: break-word;

    ul {
        display: inline-block; 
	    text-align: left; 
        background-color: #a5b5bf;
        width: 800px;
        border-radius: 10px;
        border: outset #a5b5bf 5px;
        color: #63737d;

        div {
            font-size: 45px;
            padding: 50px 10px;
            text-align: center;

            @media (max-width: 550px) {
                font-size: 25px;
                text-align: left;
            }
        }

        li { 
            padding: 10px 0px; 
        }

        @media (max-width: 870px) {
            width: 500px;
            font-size: 25px;

            @media (max-width: 550px) {
            width: 80vw;
            font-size: 20px;
           
            }
        }   
    }
`