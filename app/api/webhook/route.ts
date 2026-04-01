import { NextRequest, NextResponse } from 'next/server';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN!;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[WhatsApp Webhook] ✅ Verified – BSUID-safe (CORE-05)');
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[WhatsApp Webhook] 📥 Payload:', JSON.stringify(body, null, 2));

    const entry = body.entry?.[0];
    const change = entry?.changes?.[0]?.value;

    if (change?.event === 'phone_number_name_update') {
      console.log(`[Display Name/Username] Decision: ${change.decision}`);
    }

    if (change?.messages) {
      const displayName = change.contacts?.[0]?.profile?.name || 'Unknown';

      for (const msg of change.messages) {
        const from = msg.from;
        const userId = msg.user_id || from;
        const rawText = msg.text?.body || msg.interactive?.button_reply?.title || '';
        const text = rawText.toLowerCase();

        console.log(`[Message] BSUID/From: ${from} | UserID: ${userId} | Text: ${rawText}`);

        const isWhale = text.includes("audit") || text.includes("crore") ||
                        text.includes("migrate") || text.includes("vat");

        if (isWhale) {
          console.log(`[WHALE DETECTED] Triggering handshake for ${userId}`);
          await sendTemplateResponse(userId, "Valued Client");
          await sendInternalWhaleAlert("8801719300849", userId, rawText);
        }

        upsertToNotion(userId, displayName, from, rawText).catch(e =>
          console.error('[Notion] ⚠️ Upsert error:', e)
        );
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[WhatsApp Webhook] ❌ Error:', error);
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

// WhatsApp Helpers
async function sendTemplateResponse(to: string, name: string) {
  const url = `https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: "welcome_message__english",
        language: { code: "en" },
        components: [{ type: "body", parameters: [{ type: "text", text: name }] }]
      }
    })
  });
}

async function sendInternalWhaleAlert(to: string, clientId: string, text: string) {
  const url = `https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: `🚨 INSPIRON WHALE ALERT\nClient: ${clientId}\nQuery: "${text}"\nAction: Engage immediately for BDT 9M Mission.` }
    })
  });
}

// Notion CRM True Upsert
async function upsertToNotion(bsuid: string, displayName: string, phone: string, lastMessage: string) {
  const dbId = process.env.NOTION_LEADS_DB_ID;
  const apiKey = process.env.NOTION_API_KEY;
  if (!dbId || !apiKey) {
    console.warn('[Notion] Skipped: env vars missing');
    return;
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'Notion-Version': '2022-06-28'
  };

  const queryRes = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      filter: { property: 'contact_bsuid', title: { equals: bsuid } }
    })
  });
  const queryData = await queryRes.json();
  const existing = queryData.results?.[0];

  const properties = {
    contact_bsuid: { title: [{ text: { content: bsuid } }] },
    display_name:  { rich_text: [{ text: { content: displayName } }] },
    phone:         { phone_number: phone },
    last_message:  { rich_text: [{ text: { content: lastMessage.slice(0, 200) } }] },
    timestamp:     { date: { start: new Date().toISOString() } }
  };

  if (existing) {
    await fetch(`https://api.notion.com/v1/pages/${existing.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ properties })
    });
    console.log(`[Notion] ✅ Updated BSUID: ${bsuid}`);
  } else {
    await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers,
      body: JSON.stringify({ parent: { database_id: dbId }, properties })
    });
    console.log(`[Notion] ✅ Created BSUID: ${bsuid}`);
  }
}
