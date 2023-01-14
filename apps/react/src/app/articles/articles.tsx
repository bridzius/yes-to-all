import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

/* eslint-disable-next-line */
export interface ArticlesProps {}

const StyledArticles = styled.div``;

function generateHtml(htmlString) {
  return { __html: htmlString };
}

export function Articles(props: ArticlesProps) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/bridzius/bridzius.github.io/master/articles.json'
    )
      .then((res) => res.json())
      .then(
        (articles) => setArticles(articles),
        (error) => console.error(error)
      );
  }, []);
  return (
    <StyledArticles>
      {Object.entries(articles).map(([id, text]) => (
        <article
          key={id}
          id={id}
          dangerouslySetInnerHTML={generateHtml(text)}
        />
      ))}
    </StyledArticles>
  );
}

export default Articles;
