import styled from "styled-components"

const Container = styled.section`
    display: flex;
    background-color: #eee;
    justify-content: center;
`

const Center  = styled.div`
    column-count: 3;
    width: 1200px;
`

const Content = ({children}) =>{
    return(
        <Container>
            <Center>
                {children}
            </Center>
        </Container>
    )
}

export default Content