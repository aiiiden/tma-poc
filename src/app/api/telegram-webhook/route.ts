// import { autoRetry } from '@grammyjs/auto-retry';
import { Bot, InputMediaBuilder, webhookCallback } from 'grammy';

export const dynamic = 'force-dynamic';

export const fetchCache = 'force-no-store';

const TELEGRAM_BOT_TOKEN = '7580765678:AAEArN0V0IOJlTXXcMLXp5mADY-KO_2DJF4';

const bot = new Bot(TELEGRAM_BOT_TOKEN);

// bot.api.config.use(autoRetry());

const photo = InputMediaBuilder.photo(
  'https://i.ibb.co/bJmr26G/2024-09-16-21-55-29.jpg',
  {
    caption: 'This is bommy, sent from a bot! *START PLAY*',
  },
);

bot.on('message:text', async (ctx) => {
  await ctx.replyWithMediaGroup([photo]);
});

export const POST = webhookCallback(bot, 'std/http');
