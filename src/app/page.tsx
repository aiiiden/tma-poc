'use client';

import { useTelegram } from '@/lib/use-telegram';

export default function Home() {
  const tg = useTelegram();

  return (
    <div>
      <header className="space-y-8 py-6 px-2 text-center">
        <h1 className="text-2xl font-bold">TMA POC</h1>
      </header>

      <div className="p-3 border-y">
        <pre className="text-left text-[10px] p-4 bg-gray-200 rounded-lg overflow-x-auto">
          {JSON.stringify(tg, null, 2)}
        </pre>
      </div>
    </div>
  );
}
