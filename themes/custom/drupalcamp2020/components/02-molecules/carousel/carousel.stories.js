import React from 'react';

import carousel from './carousel.twig';

import carouselData from './carousel.yml';

import './carousel';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Carousel' };

export const carouselExample = () => (
  <div
    style={{
      maxWidth: '1224px',
    }}
    dangerouslySetInnerHTML={{ __html: carousel(carouselData) }}
  />
);
