import styled from "styled-components";

const Container = styled.body `
    width: 100%;
    height: 100%;
`

const SearchSection = styled.div `
     display: flex;
     justify-content: center;
     width: 100%;
     height: 50px;
     background-color: #4040edd0;
`

const FildDiv = styled.div `
    margin-left: 20px;
`

const Fild = styled.input `
    margin-top: 6px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    padding-right: 72vw;
    background-color: #333;
    color: white;
    &:focus {
        outline: none;
    }
`

const Button = styled.button `
    display: flex;
    justify-content: end;
    padding:2px;
    margin-top: 12px;
    margin-left: 1vw;
    margin-block-end: 15px;
`

export {Container, SearchSection, Fild, FildDiv, Button};