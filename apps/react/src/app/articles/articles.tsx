import styled from 'styled-components';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

const StyledArticles = styled.div``;

function generateHtml(htmlString: string) {
    return { __html: htmlString };
}

export function Articles() {
    const articles = useRouteLoaderData('root') as {
        [id: string]: string;
    };
    const navigate = useNavigate();

    return (
        <StyledArticles>
            {Object.entries(articles || {}).map(([id, text]) => (
                <article
                    key={id}
                    id={id}
                    dangerouslySetInnerHTML={generateHtml(text)}
                    onClick={() => navigate(`/${id}`)}
                />
            ))}
        </StyledArticles>
    );
}

export default Articles;
