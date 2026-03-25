import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion | INSPIRON TECH',
  description: 'Request deletion of your personal data from INSPIRON TECH services.',
};

export default function DataDeletion() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16 text-institutional-white font-institutional">
      <header className="mb-10">
        <p className="text-electric-cyan text-sm font-semibold tracking-widest uppercase mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-institutional-white mb-3">
          Data Deletion Request
        </h1>
        <p className="text-institutional-white/50 text-sm">
          INSPIRON TECH &middot; WABA ID: 1577018143668769
        </p>
      </header>

      <p className="text-institutional-white/80 mb-8">
        To request deletion of your personal data associated with INSPIRON TECH services,
        use any of the methods below. All requests are processed within{' '}
        <strong className="text-institutional-white">24 hours</strong>.
      </p>

      <div className="space-y-4 mb-10">
        {[
          {
            method: 'Email',
            detail: 'privacy@inspiron.tech',
            note: 'Subject line: "DATA DELETION REQUEST" — include your name and phone number or email used to contact us',
            href: 'mailto:privacy@inspiron.tech',
          },
          {
            method: 'WhatsApp',
            detail: '+880 1601-618030',
            note: 'Send the message "DELETE" from the number you used to interact with us',
            href: 'https://wa.me/8801601618030',
          },
        ].map(({ method, detail, note, href }) => (
          <div key={method} className="bg-institutional-white/5 border border-institutional-white/10 rounded-lg p-5">
            <p className="text-electric-cyan font-semibold mb-1">{method}</p>
            <a href={href} className="text-institutional-white hover:text-action-gold transition-colors font-medium">
              {detail}
            </a>
            <p className="text-institutional-white/50 text-sm mt-2">{note}</p>
          </div>
        ))}
      </div>

      <div className="bg-institutional-white/5 border border-electric-cyan/20 rounded-lg p-5 mb-10">
        <p className="text-electric-cyan font-semibold mb-2">Facebook Data Deletion</p>
        <p className="text-institutional-white/80 text-sm">
          If you interacted with INSPIRON TECH via Facebook Login or Facebook Messenger, you may also
          manage or delete your data through{' '}
          <a
            href="https://www.facebook.com/help/contact/540977946302970"
            className="text-electric-cyan hover:text-action-gold transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook&apos;s Data Deletion tool
          </a>.
        </p>
      </div>

      <p className="text-institutional-white/50 text-sm">
        For more information on your privacy rights, see our full{' '}
        <a href="/privacy" className="text-electric-cyan hover:text-action-gold transition-colors underline">
          Privacy Policy
        </a>.
      </p>

      <hr className="border-institutional-white/10 my-10" />
      <p className="text-institutional-white/30 text-sm">&copy; 2026 INSPIRON TECH. All rights reserved.</p>
    </article>
  );
}
