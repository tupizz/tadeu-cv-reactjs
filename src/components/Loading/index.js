import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';

import { Container } from './styles';
import * as loading from './loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Loading() {
  return (
    <Container>
      <FadeIn>
        <Lottie options={defaultOptions} height={300} width={300} />
      </FadeIn>
    </Container>
  );
}
