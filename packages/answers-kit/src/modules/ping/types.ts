import type { Ping } from '@/types.js';

interface IPingModule {
  ping: () => Promise<Ping>;
}

export type { IPingModule };
