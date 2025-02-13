import type { Target } from '../targets';

import { httpclient } from './httpclient/client';
import { restsharp } from './restsharp/client';

export const csharp: Target = {
  info: {
    key: 'csharp',
    title: 'C#',
    extname: '.cs',
    default: 'restsharp',
    cli: 'dotnet',
  },

  clientsById: {
    httpclient,
    restsharp,
  },
};
