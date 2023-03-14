import styled from 'styled-components';

import { Link, Outlet } from 'react-router-dom';

const StyledApp = styled.div``;

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
            <Outlet />
        </StyledApp>
    );
}

export default App;
