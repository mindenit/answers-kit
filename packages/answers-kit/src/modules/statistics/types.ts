import type { Statistics } from '@/types.js';

interface IStatisticsModule {
  get: () => Promise<Statistics>;
}

export type { IStatisticsModule };
