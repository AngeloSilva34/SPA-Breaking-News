import styled from "styled-components"

const ContainerResults = styled.section`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 50%;
    }
`

const SearchNews = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem auto;
    width: 80%;
`

const TextResults = styled.div`
    position: relative;
    padding: 2.5rem;
    background-color: #fff;
    width: 80%;
    border-radius: .3rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 1rem

    span {
        font-size: 1rem;
    }
`

export {
    ContainerResults,
    SearchNews,
    TextResults
}