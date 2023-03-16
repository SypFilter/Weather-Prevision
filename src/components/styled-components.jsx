import styled from "styled-components";

const Container = styled.body `
    width: 100%;
    height: 100%;
`
const Header = styled.div `
    display: flex;
    background-color: #000;
    color: white; 
    height: 57px
`

const LogoDiv = styled.div `
    padding: 13px;
    padding-left: 40px
`

const Navbar = styled.div `
    display: flex;
    padding: 18px;
    padding-left: 30px;
`

const Links = styled.a `
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: lighter;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-left: 40px;
    &:hover { 
        transition: 0.5s;
        color: #808080e5;
    }
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
export {Container, Header, LogoDiv, Navbar, Links, Fild, SearchSection, FildDiv, Button};