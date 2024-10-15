import crypto from 'crypto';

const TELEGRAM_BOT_TOKEN = '7580765678:AAEArN0V0IOJlTXXcMLXp5mADY-KO_2DJF4';
async function verifyTelegramWebAppData(telegramInitData: string) {
  const urlParams = new URLSearchParams(telegramInitData);

  const hash = urlParams.get('hash');
  urlParams.delete('hash');
  urlParams.sort();

  let dataCheckString = '';
  for (const [key, value] of urlParams.entries()) {
    dataCheckString += `${key}=${value}\n`;
  }
  dataCheckString = dataCheckString.slice(0, -1);

  const secret = crypto
    .createHmac('sha256', 'WebAppData')
    .update(TELEGRAM_BOT_TOKEN);
  const calculatedHash = crypto
    .createHmac('sha256', secret.digest())
    .update(dataCheckString)
    .digest('hex');

  return calculatedHash === hash;
}

export async function POST(request: Request) {
  const { raw } = (await request.json()) as { raw: string };
  console.log(raw);

  /**
   * query_id=AAHzmDYSAAAAAPOYNhI5p6kE
   * &user=%7B%22id%22%3A3056117987%2C%22first_name%22%3A%22Aiden%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22ai_iden%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D
   * &auth_date=1728906184
   * &hash=f88f62effb67dd179eeafda591c71f0609dcfb01fd434d90882b3f920316f653
   */
  try {
    const isVerified = await verifyTelegramWebAppData(raw);

    return Response.json({
      isOk: isVerified,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      return Response.json(
        {
          error: error.message,
          errorCode: 400,
        },
        {
          status: 400,
        },
      );
    }
  }
}
