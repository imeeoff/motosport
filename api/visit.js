export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const {
        page,
        browser,
        width,
        height
    } = req.body;

    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress;

    const text = `
🏍 Новый посетитель

🌍 IP: ${ip}

📄 Страница: ${page}

💻 ${browser}

📱 ${width}x${height}
`;

    await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text
            })
        }
    );

    res.status(200).json({
        ok: true
    });

}
