import styled from "styled-components"

const Card = styled.div`
    margin: 5px;
    color:rgba(0, 0, 0,0.4);
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;

    & h2{
        margin: 2px;
    }
`

const Home = () => {
    return (
        <Card>
            <h2>Please, enter a noun,</h2>
            <h2>for example "cat", and </h2>
            <h2>it will load 20 images</h2>
            <h2>related to the theme</h2>
        </Card>
    )
}

export default Home