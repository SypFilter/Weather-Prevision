import styled from "styled-components"

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

export {Navbar, Links};