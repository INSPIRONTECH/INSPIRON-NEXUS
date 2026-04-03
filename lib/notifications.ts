/**
 * INSPIRON TECH — Shared Notification Utilities
 * Transport-layer only. Each caller builds its own `properties` object.
 */

/**
 * Generic Notion page creator.
 * @param properties - Notion property map matching the target database schema
 * @param databaseId - The Notion database ID to write to
 * @returns The created page ID
 */
export async function saveToNotion(
    properties: Record<string, unknown>,
    databaseId: string
): Promise<string> {
    const res = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Notion API Error: ${errorText}`);
    }
    const data = await res.json();
    return data.id as string;
}

/**
 * Sends a plain-text WhatsApp message to the configured recipient.
 * Silently skips if env vars are missing or placeholder.
 */
export async function notifyWhatsApp(message: string): Promise<void> {
    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const to = process.env.WHATSAPP_RECIPIENT;

    if (!token || token === 'your_access_token_here' || !phoneId || !to) {
        console.warn('[notifyWhatsApp] Skipped: missing or placeholder credentials.');
        return;
    }

    try {
        const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to,
                type: 'text',
                text: { body: message },
            }),
        });
        if (!res.ok) {
            console.error('[notifyWhatsApp] API Error:', await res.text());
        }
    } catch (err) {
        console.error('[notifyWhatsApp] Network error:', err);
    }
}
