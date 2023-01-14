import styled from 'styled-components';

import {  Routes, Link } from 'react-router-dom';

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
      </Routes>
    </StyledApp>
  );
}

export default App;
