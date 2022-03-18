import styled from "styled-components"

const Footer = styled.footer`
    color: rgba(0,0,0,0.4);
    display: flex;
    border-top: 1px solid rgba(0, 0, 0,0.3);
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    padding: 10px; 

    & p{
        margin: 5px;
    }
`

export default Footer
