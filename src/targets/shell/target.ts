import type { Target } from '../targets';

import { curl } from './curl/client';
import { httpie } from './httpie/client';
import { wget } from './wget/client';

export const shell: Target = {
  info: {
    key: 'shell',
    title: 'Shell',
    extname: '.sh',
    default: 'curl',
    cli: '%s',
  },
  clientsById: {
    curl,
    httpie,
    wget,
  },
};
