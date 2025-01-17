import type { RequestHeaders } from '@/types.js';

export const getDefaultHeaders = () => {
  return new Headers({
    'Content-Type': 'application/json',
  });
};
