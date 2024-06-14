// import { useState } from "react";
import styled from "styled-components";
import FormComponent from "./components/FormComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <MainContainer>
      <header>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </header>
      <main>
        <div className="discount">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </div>
        <FormComponent />
      </main>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  width: 37.5rem;
  margin: 8.8rem 2.4rem 6.8rem;
  color: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    width: 144rem;
    flex-direction: row;
    gap: 4.5rem;
  }
  header {
    width: 100%;
    @media (min-width: 1440px) {
      width: 52.5rem;
    }
    & > h1,
    p {
      @media (min-width: 1440px) {
        text-align: left;
        padding: 0;
      }
    }
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.2916666865348816px;
    padding: 0 5rem;
    margin-bottom: 1.6rem;
    text-align: center;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 6.4rem;
  }
  main {
    max-width: 100%;
    @media (min-width: 1440px) {
      width: 54rem;
    }
  }
  .discount {
    background-color: #5e54a4;
    border-radius: 1rem;
    width: 100%;
    max-width: 100%;
    height: 8.8rem;
    padding: 1.8rem 6.7rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.6rem;
    letter-spacing: 0.2678571045398712px;
    text-align: center;
    box-shadow: 0px 8px 0px 0px #00000025;
    margin-bottom: 2.4rem;

    @media (min-width: 1440px) {
      height: 6rem;
    }
    span {
      font-weight: 700;
      display: inline-block;
    }
  }
`;
export default App;
