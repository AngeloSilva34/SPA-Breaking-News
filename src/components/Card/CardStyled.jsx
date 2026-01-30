import styled from "styled-components";

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.3rem;
    background-color: white;
`

const CardBody = styled.article`
    display: flex;
    width: 100%;
    height: 100%;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }

    img {
        width: 40%;
        object-fit: cover;
        object-position: center;
        border-radius: 0 .3rem .3rem 0;

    }
`

const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${props => props.top ? "1.2rem" : "1.1rem"};

    h2{
        margin-bottom: 1rem;
        font-size: ${props => props.top ? "2rem" : "1.6rem"};
        width: 100%;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1rem;
    }

    i {
        cursor: pointer;
        color: #0bade3;
        font-size: 1.1rem;
        text-decoration: none;
        border: none;

        &:hover {
            color: #0f6683;
        }
    }
`

const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    section{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`

export {
    CardContainer,
    CardBody,
    CardFooter,
    CardHeader
}
