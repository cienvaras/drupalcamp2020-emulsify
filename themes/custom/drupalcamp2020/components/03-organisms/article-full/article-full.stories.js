import React from 'react';

import articleFull from './article-full.twig';

import articleFullData from './article-full.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Article Full Page' };

export const articleFullPageExample = () => (
  <div
    style={{
      maxWidth: '1224px',
    }}
    dangerouslySetInnerHTML={{ __html: articleFull(articleFullData) }}
  />
);
