import { validate } from '@telegram-apps/init-data-node';

export async function POST(request: Request) {
  const botToken = '7580765678:AAEArN0V0IOJlTXXcMLXp5mADY-KO_2DJF4';
  const { raw } = (await request.json()) as { raw: string };

  let isOk = false;

  try {
    validate(raw, botToken);
    console.log('Valid');
    isOk = true;
  } catch (error: unknown) {
    console.log(error);
  }

  return Response.json({
    isOk,
  });
}
