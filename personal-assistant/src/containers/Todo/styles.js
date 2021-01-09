import styled from 'styled-components'


export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 375px;

    @media (max-width: 775px) {
        text-align: center;
        justify-content: center;
        margin: auto;

        @media (max-width: 550px) {
            width: 90vw;
        }
    }
`

export const AllTodoInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 700px;
    margin: auto;
    margin-bottom: 20px;

   @media (max-width: 775px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: 80vw;
    }
`

export const Title = styled.div`
    width: 700px;
    height: 150px;
    background-color: #B0A1BA;
    border: #B0A1BA outset 5px;
    border-radius: 10px;
    padding-top: 30px;
    font-size: 100px;
    text-align: center;
    color: #7c6c87;
    margin: auto;  
    margin-bottom: 80px;
    margin-top: 80px;

    @media (max-width: 750px) {
        width: 500px;
        padding-top: 40px;
        font-size: 90px;

        @media (max-width: 500px) {
        width: 430px;

            @media (max-width: 430px) {
                width: 80vw;
                font-size: 60px;
                padding-top: 60px;

            }
        }
    }
`