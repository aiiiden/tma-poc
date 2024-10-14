'use client';

import { useEffect } from 'react';

export const ErudaProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    import('eruda').then((lib) => lib.default.init());
  }, []);

  return children;
};
