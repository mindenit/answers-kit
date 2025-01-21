import type { Statistics } from '@/types.js';
import type { IStatisticsModule } from './types.js';

export class StatisticsModule implements IStatisticsModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Get statistics
   *
   * @example Example usage:
   * ```ts
   * const statistics = await answersKit.statistics.get()
   * ```
   *
   * @returns an statistics object
   *
   * @publicApi
   * */

  async get(): Promise<Statistics> {
    const response = await fetch(`${this.url}/statistics`);

    return response.json();
  }
}
