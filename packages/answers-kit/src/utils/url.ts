import type { SortingOptions } from '@/types.js';

/**
 * Append query parameters to URL
 *
 * @param url Base URL
 * @param params Object containing query parameters
 * @param sorting Optional sorting parameters
 * @returns URL with appended query parameters
 */
export const appendQueryParams = <T extends string>(
  url: string,
  params?: Record<string, any>,
  sorting?: SortingOptions<T>,
): string => {
  const urlParams = new URLSearchParams();

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value) {
        urlParams.append(key, String(value));
      }
    }
  }

  if (sorting) {
    if (sorting.order) {
      urlParams.append('order', sorting.order);
    }
    if (sorting.sortBy) {
      urlParams.append('sortBy', sorting.sortBy);
    }
  }

  const queryString = urlParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};

/**
 * Legacy function to maintain compatibility - only appends sorting parameters
 */
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
