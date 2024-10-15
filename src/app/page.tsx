'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { useTelegram } from '@/lib/use-telegram';

export default function Home() {
  const tg = useTelegram();

  return (
    <div>
      <header className="space-y-1 py-6 px-2 text-center">
        <h1 className="text-2xl font-bold">TMA POC</h1>
      </header>
      <main className="border-b">
        <div className="p-4 border-t space-y-1">
          <h2 className="text-lg font-medium">Location</h2>
          <pre
            role="button"
            onClick={() => {
              navigator.clipboard.writeText(location.href);
              alert('Copied to clipboard');
            }}
            className="text-left text-[10px] p-4 bg-gray-200 rounded-lg overflow-x-auto"
          >
            {location.href}
          </pre>
        </div>
        <div className="p-4 border-t space-y-1">
          <h2 className="text-lg font-medium">useTelegram Hook</h2>
          <pre className="text-left text-[10px] p-4 bg-gray-200 rounded-lg overflow-x-auto">
            {JSON.stringify(tg, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
}
