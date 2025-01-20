import type { SortingOptions } from '@/types.js';

export const appendSortingParams = <T extends string>(
  url: string,
  sorting?: SortingOptions<T>,
): string => {
  if (!sorting) {
    return url;
  }

  const params = new URLSearchParams();

  if (sorting.order) {
    params.append('order', sorting.order);
  }

  if (sorting.sortBy) {
    params.append('sortBy', sorting.sortBy);
  }

  const queryString = params.toString();
  return queryString ? `${url}?${queryString}` : url;
};
