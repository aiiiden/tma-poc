'use client';

import { useLaunchParams } from '@telegram-apps/sdk-react';

//http://localhost:3000/#tgWebAppData=query_id%3DAAHzmDYSAAAAAPOYNhLFEsP9%26user%3D%257B%2522id%2522%253A305567987%252C%2522first_name%2522%253A%2522Aiden%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522ai_iden%2522%252C%2522language_code%2522%253A%2522ko%2522%252C%2522is_premium%2522%253Atrue%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1728898907%26hash%3Da00c82d08f884f1f28f80317f35a4f8858320a3e6f41734c84f59ae6b2affb16&tgWebAppVersion=7.10&tgWebAppPlatform=macos&tgWebAppBotInline=1&tgWebAppThemeParams=%7B%22destructive_text_color%22%3A%22%23ef5b5b%22%2C%22header_bg_color%22%3A%22%23131415%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22section_bg_color%22%3A%22%2318222d%22%2C%22hint_color%22%3A%22%23b1c3d5%22%2C%22bottom_bar_bg_color%22%3A%22%23213040%22%2C%22section_header_text_color%22%3A%22%23b1c3d5%22%2C%22section_separator_color%22%3A%22%23213040%22%2C%22subtitle_text_color%22%3A%22%23b1c3d5%22%2C%22button_color%22%3A%22%232ea6ff%22%2C%22secondary_bg_color%22%3A%22%23131415%22%2C%22bg_color%22%3A%22%2318222d%22%2C%22link_color%22%3A%22%2362bcf9%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22accent_text_color%22%3A%22%232ea6ff%22%7D
export default function Home() {
  const params = useLaunchParams();

  return (
    <div>
      <header className="space-y-8 py-10 px-2 text-center">
        <h1 className="text-2xl font-bold">TMA POC</h1>
        <pre className="text-left text-[10px] p-4 bg-gray-200 rounded-lg overflow-x-auto">
          {JSON.stringify(params, null, 2)}
        </pre>
      </header>
    </div>
  );
}
