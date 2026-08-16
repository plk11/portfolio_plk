"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

// Matches the server-rendered <html> before the blocking theme script runs,
// so useSyncExternalStore can swap to the real client value without a
// hydration mismatch.
function getServerSnapshot(): Theme {
  return "light";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return { theme, toggleTheme };
}
