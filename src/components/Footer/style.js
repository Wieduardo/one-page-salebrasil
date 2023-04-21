import styled from "styled-components";

export const FooterContainer= styled.footer`
    min-height: 35vh;
    color: var(--color-primary);
    background-color: var(--color-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    &>h3 {
      padding:20px 0;
    }
`
export const MediaContainer= styled.div`
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 800px){
        flex-direction:column;
        align-items: center;
        gap: 20px;
    }
`
export const FooterMedia = styled.ul`
    width: 40vw;
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-right: 2px solid var(--color-primary);

    & .icon-face,.icon-twit,.icon-insta,.icon-whats {
        color: var(--color-primary);
        font-size:40px;
    
        &:hover{
          transition: 0.75s;
        }
    }

    & .icon-whats{
        &:hover{
          color: #25D366;
        }
      }
    
    & .icon-twit{
        &:hover{
          color: #1DA1F2;
        }
    }
    
    & .icon-insta{
        &:hover{
          color: #833AB4;
        }
    }
    
    & .icon-face{
        &:hover{
          color: #4267B2;
        }
    }

    @media(max-width: 800px){
        border-right: none;
        width: 90vw;
    }

`

export const FooterEndereco = styled.div`
    width: 40vw;
    min-height: 20vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:5px;

    @media(max-width: 800px){
        width: 90vw;
        min-height:10vh;
    }
`