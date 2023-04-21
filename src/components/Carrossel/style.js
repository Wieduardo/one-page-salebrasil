import styled from "styled-components";

export const Container= styled.div`
    width: 100vw;
    height: 55vh;
    margin: 100px 0 20px 0;
    position: relative;

    & button{
        position:absolute;
        padding:10px;
        font-size:40px;
        cursor: pointer;
        border:none;
        color: #fff;

        &:hover{
            color: var(--color-primary);
            font-size: 45px;
            transition: .5s;
        }
    }
    & .arrow-right{
        padding-right: 20px;
        top:0;
        bottom:0;
        left:auto;
        right:0;
        background: linear-gradient(to right, transparent 0%, black 200%);
    }
    & .arrow-left{
        top:0;
        bottom:0;
        left:0;
        right:auto;
        background: linear-gradient(to left, transparent 0%, black 200%);
    }
`

export const Gallery= styled.ul`
    height: 55vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
    & li{
        min-width: 100vw;
        display: flex;
    }

    & li img{
        width: 100vw;
    }
`