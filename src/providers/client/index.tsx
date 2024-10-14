'use client';

import { ErudaProvider } from './eruda-provider';
import { ReactQueryProvider } from './react-query-provider';
import { RecoilProvider } from './recoil';

export function ClientSideProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErudaProvider>
      <ReactQueryProvider>
        <RecoilProvider>{children}</RecoilProvider>
      </ReactQueryProvider>
    </ErudaProvider>
  );
}
