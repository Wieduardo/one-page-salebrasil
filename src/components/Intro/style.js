import styled from "styled-components";

export const IntroContainer = styled.section`
    height: 75vh;
    color: var(--color-text2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    
    &>img{
        max-width: 30vw;
        object-fit:scale-down;
    }

    @media(max-width: 800px){
        flex-direction: column-reverse;
        align-items: center;
        &>img{
            max-width:50vw;
        }
    }
`

export const IntroText = styled.div`
    width:30vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    color: var(--color-primary);
    font-family: 'Bebas Neue', cursive;
    font-size:2rem;


    &>h4{
        color: #675D50;
        margin: 0 0 10px 0;
        font-weight: bold;
        font-size:3rem;
    }
    &>h3{
        font-weight: bold;
        font-size: 3rem;
    }

    @media(max-width: 800px){
        width: 80vw;
    }
`