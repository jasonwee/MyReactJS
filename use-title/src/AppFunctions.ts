import { useEffect, useRef, useState } from "react";

export interface UseTitleOptions {
  restoreOnUnmount?: boolean;
}

const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
  restoreOnUnmount: false,
};

function useTitle(
  initialTitle: string,
  options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS
): [string, (newTitle: string) => void] {
  // 1. Maintain state internally so App.js can consume it
  const [title, setTitle] = useState(initialTitle);
  
  // 2. Track the previous title for restoration
  const prevTitleRef = useRef(typeof document !== "undefined" ? document.title : "");

  // 3. Update title safely inside useEffect when state changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = title;
    }
  }, [title]);

  // 4. Handle title restoration when the component unmounts
  useEffect(() => {
    const prevTitle = prevTitleRef.current;
    return () => {
      if (options.restoreOnUnmount && typeof document !== "undefined") {
        document.title = prevTitle;
      }
    };
  }, [options.restoreOnUnmount]);

  return [title, setTitle];
}

// Single conditional export safely handling SSR environments
export default typeof document !== "undefined" 
  ? useTitle 
  : (initialTitle: string) => [initialTitle, () => {}] as [string, (newTitle: string) => void];
