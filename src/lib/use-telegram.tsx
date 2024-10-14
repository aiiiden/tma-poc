import { LaunchParams, retrieveLaunchParams } from '@telegram-apps/sdk';
import { useEffect, useState } from 'react';

export function useTelegram() {
  const [isTMA, setIsTMA] = useState<boolean>(false);
  const [launchParams, setLaunchParams] = useState<LaunchParams>();

  useEffect(() => {
    try {
      const params = retrieveLaunchParams();

      setLaunchParams(params);

      setIsTMA(true);
    } catch (error: unknown) {
      console.log(error);
      setIsTMA(false);
    }
  }, []);

  return {
    isTMA,
    launchParams,
  };
}
