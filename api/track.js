// Serverless-функция Vercel: /api/track
// Принимает данные о визите от script.js и отправляет уведомление в Telegram.
// ВАЖНО: токен бота и chat_id берутся из переменных окружения Vercel,
// а не хранятся в коде — см. инструкцию в README_TELEGRAM.md

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в переменных окружения Vercel');
    res.status(200).json({ ok: false }); // отвечаем 200, чтобы не ломать сайт для посетителя
    return;
  }

  try {
    // sendBeacon на некоторых браузерах шлёт тело как текст, поэтому парсим вручную на всякий случай
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { body = {}; }
    }
    body = body || {};

    const page = body.page || 'неизвестно';
    const referrer = body.referrer && body.referrer.trim() ? body.referrer : 'напрямую / без перехода';
    const lang = body.lang || 'неизвестно';
    const screen = body.screen || 'неизвестно';

    // IP посетителя (Vercel прокидывает реальный IP в этом заголовке)
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'неизвестно';

    const userAgent = req.headers['user-agent'] || 'неизвестно';

    // Геолокация по IP (бесплатный сервис, без ключа, лимит ~1000 запросов/день)
    let location = 'не удалось определить';
    if (ip && ip !== 'неизвестно' && !ip.startsWith('127.') && !ip.startsWith('::1')) {
      try {
        const geoResp = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoResp.ok) {
          const geo = await geoResp.json();
          if (!geo.error) {
            const parts = [geo.city, geo.region, geo.country_name].filter(Boolean);
            location = parts.length ? parts.join(', ') : 'не удалось определить';
            if (geo.org) location += ` — ${geo.org}`;
          }
        }
      } catch (e) {
        console.error('Geo lookup error:', e);
      }
    }

    const time = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      dateStyle: 'short',
      timeStyle: 'medium',
    });

    const text =
      `🏍 *Новый визит на MotoSport*\n\n` +
      `📄 Страница: \`${page}\`\n` +
      `🔗 Переход: ${referrer}\n` +
      `🌍 Локация: ${location}\n` +
      `📍 IP: \`${ip}\`\n` +
      `💻 Устройство: ${userAgent}\n` +
      `🌐 Язык: ${lang} · Экран: ${screen}\n` +
      `🕒 Время (МСК): ${time}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('track.js error:', err);
    res.status(200).json({ ok: false });
  }
}
