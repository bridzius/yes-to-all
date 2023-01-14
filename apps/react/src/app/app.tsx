import styled from 'styled-components';

import { Articles } from './articles/articles';
import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>bridzius.lt</h1>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
