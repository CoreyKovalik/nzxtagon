import { useState, useEffect, Dispatch } from 'react';

const queryParamMap = new Map<string, Set<Dispatch<string | undefined>>>();

const updateQueryParam = (key: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(key);
  if (queryParamMap.has(key)) {
    queryParamMap.get(key)?.forEach((setParam) => setParam(value ?? undefined));
  }
};

/**
 * @summary
 * A custom React hook for accessing and managing query parameters in the URL.
 *
 * @description
 * The `useQueryParam` hook allows you to read the value of a specific query parameter from the URL.
 * It ensures that your component re-renders when the URL changes, such as when navigating or using programmatic URL updates (e.g., `pushState` or `replaceState`).
 * This hook is useful for extracting query parameters and reacting to changes in the URL without needing to manage event listeners or state updates manually.
 *
 * @example
 * const krakenQueryParam = useQueryParam('kraken');
 */
const useQueryParam = (key: string): string | undefined => {
  const [param, setParam] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!queryParamMap.has(key)) {
      queryParamMap.set(key, new Set());
    }
    queryParamMap.get(key)?.add(setParam);

    updateQueryParam(key);

    const handlePopState = () => updateQueryParam(key);
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.addEventListener('popstate', handlePopState);

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      updateQueryParam(key);
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      updateQueryParam(key);
    };

    return () => {
      queryParamMap.get(key)?.delete(setParam);
      if (queryParamMap.get(key)?.size === 0) {
        queryParamMap.delete(key);
      }
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [key]);

  return param;
};

export default useQueryParam;
