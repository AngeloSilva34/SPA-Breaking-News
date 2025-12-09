import styled from "styled-components";

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.3rem;
    background-color: white;
    padding: 2rem;
`

const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2{
        margin-bottom: 1rem;
    }

    img {
        width: 30%;
        object-fit: cover;
        object-position: center;
        

    }
`

const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`

export {
    CardContainer,
    CardBody,
    CardFooter
}
