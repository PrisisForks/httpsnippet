import type { Target } from '../targets';

import { http11 } from './http1.1/client';

export const http: Target = {
  info: {
    key: 'http',
    title: 'HTTP',
    extname: null,
    default: '1.1',
  },
  clientsById: {
    'http1.1': http11,
  },
};
