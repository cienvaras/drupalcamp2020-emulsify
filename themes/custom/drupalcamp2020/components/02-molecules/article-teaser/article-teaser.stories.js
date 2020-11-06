import React from 'react';

import articleTeaser from './article-teaser.twig';

import articleTeaserData from './article-teaser.yml';
import articleTeaserHighlightedData from './article-teaser-highlighted.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Article Teaser' };

export const articleTeaserExample = () => (
  <div
    style={{
      maxWidth: '1224px',
    }}
    dangerouslySetInnerHTML={{ __html: articleTeaser(articleTeaserData) }}
  />
);

export const articleTeaserHighlightedExample = () => (
  <div
    style={{
      maxWidth: '1224px',
    }}
    dangerouslySetInnerHTML={{
      __html: articleTeaser(articleTeaserHighlightedData),
    }}
  />
);
