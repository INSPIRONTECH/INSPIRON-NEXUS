import { NextResponse } from 'next/server';
import { saveToNotion, notifyWhatsApp } from '@/lib/notifications';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Received feedback submission:', data);

        const NOTION_DB_ID = process.env.NOTION_CLIENT_FEEDBACK_DB_ID;

        const results = {
            notion: 'skipped',
            whatsapp: 'skipped'
        };

        // 1. Save to Notion — schema specific to this feedback database
        if (NOTION_DB_ID) {
            try {
                const properties: Record<string, unknown> = {
                    'Business Name': {
                        title: [{ text: { content: data.businessName || 'Unknown Business' } }]
                    },
                    'Contact Person': {
                        rich_text: [{ text: { content: data.contactPerson || '' } }]
                    },
                    'Email': { email: data.email || null },
                    'Phone': { phone_number: data.phone || null },
                    'Received Support': {
                        select: { name: data.receivedSupport || 'No' }
                    },
                    'Support Details': {
                        rich_text: [{ text: { content: data.supportDetails || '' } }]
                    },
                    'Missing Support': {
                        rich_text: [{ text: { content: data.whatWasNotProvided || '' } }]
                    },
                    'Current Needs': {
                        rich_text: [{ text: { content: data.whatYouNeed || '' } }]
                    },
                    'Suggestions': {
                        rich_text: [{ text: { content: data.improvementSuggestions || '' } }]
                    },
                    'Customization Requirements': {
                        rich_text: [{ text: { content: data.customizationRequirements || '' } }]
                    },
                    'Budget': {
                        select: { name: data.budget || 'Not sure yet' }
                    },
                    'Submission Date': {
                        date: { start: new Date().toISOString() }
                    }
                };

                await saveToNotion(properties, NOTION_DB_ID);
                results.notion = 'success';
            } catch (error) {
                console.error('Notion submission failed:', error);
                results.notion = 'error';
            }
        }

        // 2. WhatsApp notification
        try {
            const messageBody = `*New Client Feedback*\n\n` +
                `*Business:* ${data.businessName}\n` +
                `*Contact:* ${data.contactPerson}\n` +
                `*Phone:* ${data.phone}\n` +
                `*Budget:* ${data.budget}\n` +
                `*Needs:* ${(data.whatYouNeed || '').substring(0, 100)}${(data.whatYouNeed?.length ?? 0) > 100 ? '...' : ''}`;

            await notifyWhatsApp(messageBody);
            results.whatsapp = 'success';
        } catch (error) {
            console.error('WhatsApp notification failed:', error);
            results.whatsapp = 'error';
        }

        return NextResponse.json({ success: true, results });
    } catch (error) {
        console.error('Feedback API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
