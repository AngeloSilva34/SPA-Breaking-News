import styled from "styled-components";

export const MenageProfileContainer = styled.section`
  width: 60%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: .3rem;

  h2 {
    margin-top: 1rem;
  }

  form {
    min-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    gap: 1rem;

    input {
      width: 100%;
    }

    h4 {
      width: 100%;
    }
  }
`