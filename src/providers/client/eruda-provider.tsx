import eruda from 'eruda';
import { useEffect } from 'react';

export const ErudaProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    eruda.init();
  }, []);

  return children;
};
