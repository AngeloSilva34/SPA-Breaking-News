import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem 1rem;
    /* position: fixed;
    top: 0; */
    background-color: white;
    z-index: 1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const ImageLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`

const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex; align-items: center;

    button {
        position: absolute;
        top: 1;
        right: .2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: .3rem;
        padding: .5rem;
        cursor: pointer;
        transition: .3s;
    }

    button:hover {
        background-color: #757575;
        color: #f5f5f5;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: .6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: .3rem;

        &:focus{
            border: 1px solid #0bade3;
        }
    }
`

const ErrorSpan = styled.span`
    background-color: #ffd4d4;
    color: #ff2e2e;
    padding: .5rem;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    border-radius: 7px;
`

const UserLoggedSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 1rem;

    h2 {
        font-size: 1.1rem;
        color: #0bade3;
        transition: all .3s;
        cursor: pointer;
    }
    h2:hover {
    color: #043546;
    }

    i {
        font-size: 1.5rem;
        color: #0bade3;
        cursor: pointer;
    }
    i:hover {
        color: #043546;
    }
`


export {
    Nav,
    ImageLogo,
    InputSpace,
    ErrorSpan,
    UserLoggedSpace
}