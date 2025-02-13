import type { Target } from '../targets';

import { native } from './native/client';

export const go: Target = {
  info: {
    key: 'go',
    title: 'Go',
    extname: '.go',
    default: 'native',
    cli: 'go',
  },
  clientsById: {
    native,
  },
};
