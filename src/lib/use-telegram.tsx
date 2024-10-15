import { LaunchParams, User, retrieveLaunchParams } from '@telegram-apps/sdk';
import { useEffect, useRef, useState } from 'react';

export function useTelegram() {
  const [isTMA, setIsTMA] = useState<boolean>(false);
  const launchParams = useRef<LaunchParams>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    try {
      const params = retrieveLaunchParams();
      launchParams.current = params;
      setIsTMA(true);
    } catch (error: unknown) {
      console.log(error);
      setIsTMA(false);
    }

    return () => {
      launchParams.current = undefined;
    };
  }, []);

  useEffect(() => {
    if (isTMA) {
      validateUser();
    }
  }, [isTMA]);

  async function validateUser() {
    if (!isTMA) {
      return;
    }

    const response = await fetch('/api/telegram', {
      method: 'POST',
      body: JSON.stringify({
        raw: launchParams.current?.initDataRaw,
      }),
    });

    const data = (await response.json()) as { isOk: boolean };

    if (data.isOk) {
      setUser(launchParams.current?.initData?.user);
    }
  }

  return {
    isTMA,
    launchParams: launchParams.current,
    user,
  };
}
