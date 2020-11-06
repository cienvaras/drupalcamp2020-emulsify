/* eslint-disable no-unused-vars */

import { tns } from 'tiny-slider/src/tiny-slider';

Drupal.behaviors.carousel = {
  attach() {
    const slider = tns({
      container: '.carousel__images',
      items: 3,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      controlsContainer: '.carousel__controls',
      nav: false,
    });
  },
};
