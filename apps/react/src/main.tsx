import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app/app';
import Article from './app/article/article';
import Articles from './app/articles/articles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        id: 'root',
        loader: ({ request }) =>
            fetch(
                'https://raw.githubusercontent.com/bridzius/bridzius.github.io/master/articles.json',
                { signal: request.signal }
            ).then((res) => res.json()),
        children: [
            { path: '', element: <Articles /> },
            { path: ':articleId', element: <Article /> },
        ],
    },
]);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
