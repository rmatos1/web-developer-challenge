import styled from 'styled-components';
import { TopBar, FeedForm, Feeds } from './components';
import { FeedProvider } from './context';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #343434;
  display: flex;
  flex-direction: column;
  align-items: center
`

const Container = styled.div`
  width: min(100%, 610px);
  padding: 0 10px;
  box-sizing: border-box;
`

function App() {

  return (
    <FeedProvider>

      <Wrapper>

        <TopBar />

        <Container>

          <FeedForm />

          <Feeds />

        </Container>

      </Wrapper>

    </FeedProvider>
  );
}

export default App;
