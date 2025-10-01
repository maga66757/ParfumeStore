export const config = {
  runtime: "edge",
};

type RequestBody = {
  name: string;
  phone: string;
  perfume?: string;
};

export default async function handler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "content-type": "application/json" },
      });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    const body = (await req.json()) as Partial<RequestBody>;

    const name = (body.name || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const perfume = (body.perfume || "").toString().trim();

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const text = [
      "🆕 Новая заявка с сайта",
      `👤 Имя: ${name}`,
      `📞 Телефон: ${phone}`,
      perfume ? `🧴 Парфюм: ${perfume}` : undefined,
      `⏰ Время: ${new Date().toLocaleString("ru-RU")}`,
    ]
      .filter(Boolean)
      .join("\n");

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const resp = await fetch(tgUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(JSON.stringify({ error: "Telegram error", details: errText }), {
        status: 502,
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: "Unexpected error", details: e?.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}


