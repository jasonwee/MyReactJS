import logo from './logo.svg';
import './App.css';
import styled, {css} from 'styled-components';

const Wrapper = styled.section`
  padding: 4rem;
  margin: 2rem;
  background-color: ${({color}) => color ? color : "papayawhip"};
  ${({is3D}) => is3D && css`
    background-color: yellow;
    box-shadow: 1rem 1rem 2rem black;
    border: 1rem solid yellow;
  `}
`

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`

const CircleWrapper = styled(Wrapper)`
  border-radius: 100%;
`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Title>Hello World</Title>
        </Wrapper>
        <Wrapper color={"white"} is3D="true">
          <Title>Hello World</Title>
        </Wrapper>
        <CircleWrapper color={"green"} >
           Hello
        </CircleWrapper>
      </header>
    </div>
  );
}

export default App;
