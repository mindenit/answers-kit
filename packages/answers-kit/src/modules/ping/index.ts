import type { Ping } from '@/types.js';
import type { IPingModule } from './types.js';

export class PingModule implements IPingModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Ping the server
   *
   * @example Example usage:
   * ```ts
   * const ping = await answersKit.ping.ping()
   * ```
   *
   * @returns a string
   *
   * @publicApi
   * */

  async ping(): Promise<Ping> {
    const response = await fetch(`${this.url}/ping`);

    return response.json();
  }
}
