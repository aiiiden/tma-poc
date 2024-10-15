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
        {tg.launchParams?.initDataRaw && (
          <Link
            target="_blank"
            className={buttonVariants({
              variant: 'outline',
              size: 'sm',
              className: 'text-xs',
            })}
            // #tgWebAppData=query_id%3DAAHzmDYSAAAAAPOYNhJaLnX9%26user%3D%257B%2522id%2522%253A305567987%252C%2522first_name%2522%253A%2522Aiden%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522ai_iden%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522is_premium%2522%253Atrue%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1728969994%26hash%3D6beaa3b08e65ab326d63b0549d400cf7206c5703fa394dbaff532cd8188b43ec&tgWebAppVersion=7.10&tgWebAppPlatform=macos&tgWebAppBotInline=1&tgWebAppThemeParams=%7B%22link_color%22%3A%22%2362bcf9%22%2C%22bottom_bar_bg_color%22%3A%22%23213040%22%2C%22secondary_bg_color%22%3A%22%23131415%22%2C%22section_separator_color%22%3A%22%23213040%22%2C%22destructive_text_color%22%3A%22%23ef5b5b%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22bg_color%22%3A%22%2318222d%22%2C%22section_bg_color%22%3A%22%2318222d%22%2C%22subtitle_text_color%22%3A%22%23b1c3d5%22%2C%22button_color%22%3A%22%232ea6ff%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22section_header_text_color%22%3A%22%23b1c3d5%22%2C%22header_bg_color%22%3A%22%23131415%22%2C%22accent_text_color%22%3A%22%232ea6ff%22%2C%22hint_color%22%3A%22%23b1c3d5%22%7D
            href={`http://localhost:3000/#tgWebAppData=${encodeURIComponent(tg.launchParams.initDataRaw)}`}
          >
            Open Localhost
          </Link>
        )}
      </header>

      <div className="p-3 border-y">
        <pre className="text-left text-[10px] p-4 bg-gray-200 rounded-lg overflow-x-auto">
          {JSON.stringify(tg, null, 2)}
        </pre>
      </div>
    </div>
  );
}
