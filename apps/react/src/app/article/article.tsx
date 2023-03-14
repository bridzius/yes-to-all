import { useParams, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';

function generateHtml(htmlString: string) {
    return { __html: htmlString };
}

const StyledArticle = styled.div``;

export function Article() {
    const { articleId } = useParams();
    const articles = useRouteLoaderData('root') as {
        [id: string]: string;
    };
    const article = articles[articleId || ''];

    return (
        <StyledArticle>
            <article dangerouslySetInnerHTML={generateHtml(article)} />
        </StyledArticle>
    );
}

export default Article;
