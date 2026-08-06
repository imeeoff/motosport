export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false });
    return;
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const update = req.body;

  try {
    const message = update.message;
    if (message?.text === '/start') {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: message.chat.id,
          text: 'Привет! 🏍 Это бот MotoSport. Здесь ты будешь получать уведомления.',
        }),
      });
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('webhook error:', err);
    res.status(200).json({ ok: true }); // Telegram нужно всегда отвечать 200, иначе будет ретраить
  }
}
