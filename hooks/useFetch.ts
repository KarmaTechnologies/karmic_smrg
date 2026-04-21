"use client";

import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Request failed");
        }

        const json = (await response.json()) as T;
        if (mounted) {
          setState({ data: json, loading: false, error: null });
        }
      } catch {
        if (mounted) {
          setState({ data: null, loading: false, error: "Unable to load data." });
        }
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [url]);

  return state;
}
