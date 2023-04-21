import styled from "styled-components";

export const Navigation= styled.nav`
    background: var(--color-primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: var(--color-text2);
    padding: 10px 20px 0 20px;
`

export const Logo = styled.div`
    width: 20vw;
    @media(max-width: 800px){
        width: 30vw;
    };
`

export const NavContent = styled.div`
    width: 80vw;
    @media(max-width: 800px){
        width: 70vw;
    }
    & input{
        margin-bottom: 10px;
    }
    & ul{
        display: flex;
        flew-direction: row;
        align-items: center;
    }
    & ul li{
        padding: 5px 20px;
        list-style: none;
        display: inline-block;
    }
    & ul li ul{
        display: block;
        margin-left: -20px;
    }
    & ul li ul.dropdown li {
        display: block;
    }
    & ul li ul.dropdown {
        margin-top: 5px;
        width: 250px;
        background: var(--color-primary);
        position: absolute;
        z-index: 999;
        display: none;
    }
    & ul li:hover{
        background-color: var(--color-primary-light);
        cursor: pointer;

        & ul.dropdown{
            display: block;
            animation: fadeIn .5s linear; 

            @keyframes fadeIn{
                from {opacity:0}
                to {opacity:1}
            }
        }

    }
    & ul li span{
        text-decoration: none;
        display: inline-block;
        transition: all ease 0.3s;
    }
`