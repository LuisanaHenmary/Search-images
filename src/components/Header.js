import styled from "styled-components"

const Header = styled.header`
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    padding: 22px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0,0.3);
    z-index: 2;
    position: relative;

    & input{
        outline: none;
        border: solid 1px #eee;
        padding: 10px 5px;
        border-radius: 4px;
    }

    & label{
        color: white;
        font-size: 30px;
        margin-right: 5px; 
    }

    & button{
        color white;
        background-color:rgba(0, 0, 0,0.5);
        border:none;
        padding: 10px 5px;
        border-radius: 4px;
        cursor: pointer;
    }

    & button:hover{
        color white;
        background-color:rgba(0, 0, 0,0.3);
    }


    & h1{
        color: white;
    }
`

export default Header