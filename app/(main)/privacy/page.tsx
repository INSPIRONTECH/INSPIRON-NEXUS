import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | INSPIRON TECH',
  description: 'Privacy Policy for INSPIRON TECH digital automation and consulting services.',
};

export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 text-institutional-white font-institutional">

      <header className="mb-12">
        <p className="text-electric-cyan text-sm font-semibold tracking-widest uppercase mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-institutional-white mb-3">
          Privacy Policy
        </h1>
        <p className="text-institutional-white/50 text-sm">
          INSPIRON TECH · Last updated: March 25, 2026
        </p>
      </header>

      <Section title="1. Who We Are">
        <p className="text-institutional-white/80">
          INSPIRON TECH is a technology consulting and digital automation company based in Dhaka,
          Bangladesh. We provide WhatsApp Business automation, Facebook and Instagram page management,
          ERP consulting, and custom software development services to businesses. This Privacy Policy
          explains how we collect, use, store, and protect personal data when you use our services
          or interact with us through Meta platforms (WhatsApp, Facebook, Instagram).
        </p>
      </Section>

      <Section title="2. Data We Collect">
        <ul className="list-none space-y-3">
          {[
            ['Contact information', 'Phone numbers, names, and email addresses provided by users who message our clients via WhatsApp or Facebook'],
            ['Message content', 'Text messages sent to or received from our clients\u2019 WhatsApp Business numbers, solely for delivering automated responses and routing inquiries'],
            ['Facebook/Instagram data', 'Page engagement metrics (likes, comments, reach) accessed via the Meta Graph API on behalf of our business clients'],
            ['Business information', 'Company names, industry details, and service requirements collected during client onboarding'],
            ['Website usage data', 'IP addresses, browser type, and pages visited via standard web analytics tools'],
          ].map(([label, desc]) => (
            <li key={label} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span><strong className="text-institutional-white">{label}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul className="list-none space-y-2 mb-4">
          {[
            'Sending automated WhatsApp messages on behalf of business clients (e.g., invoices, order confirmations, service updates)',
            'Managing and publishing content to Facebook Pages and Instagram accounts on behalf of clients',
            'Routing customer inquiries from WhatsApp and Facebook Messenger to client support or CRM systems',
            'Generating engagement and performance reports for clients',
            'Improving our own services and website experience',
            'Complying with legal obligations and Meta Platform Terms',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-institutional-white/60 text-sm border-l-2 border-electric-cyan pl-4">
          We do <strong className="text-institutional-white">not</strong> use personal data for
          advertising profiling, sell data to third parties, or use it for any purpose beyond
          delivering the services described above.
        </p>
      </Section>

      <Section title="4. Meta Platform Data">
        <p className="text-institutional-white/80 mb-4">
          INSPIRON TECH accesses Meta Platform Data through the official Meta Graph API and
          WhatsApp Business Cloud API, governed by Meta&apos;s{' '}
          <a href="https://developers.facebook.com/terms/" className="text-electric-cyan hover:text-action-gold transition-colors underline" target="_blank" rel="noopener noreferrer">
            Platform Terms
          </a>{' '}and{' '}
          <a href="https://developers.facebook.com/devpolicy/" className="text-electric-cyan hover:text-action-gold transition-colors underline" target="_blank" rel="noopener noreferrer">
            Developer Policies
          </a>.
        </p>
        <ul className="list-none space-y-2">
          {[
            'Meta Platform Data is accessed only with explicit authorisation from our business clients',
            'Data is used only to provide the specific service the client engaged us for',
            'We do not transfer Meta Platform Data to data brokers or use it for independent analytics',
            'Access tokens and API credentials are stored securely and never shared externally',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="5. Data Sharing">
        <p className="text-institutional-white/80 mb-3">
          We do not sell, rent, or trade your personal data. Data may be shared only in these limited circumstances:
        </p>
        <ul className="list-none space-y-3">
          {[
            ['With our clients', 'End-user messages and contact details are shared with the business client on whose behalf we operate'],
            ['With service providers', 'Trusted infrastructure providers (e.g., Vercel for hosting, Meta APIs) who process data under strict data processing agreements'],
            ['Legal requirements', 'We may disclose data if required by law, court order, or government authority in Bangladesh'],
          ].map(([label, desc]) => (
            <li key={label} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span><strong className="text-institutional-white">{label}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="6. Data Retention">
        <ul className="list-none space-y-2">
          {[
            'WhatsApp message logs are retained for a maximum of 90 days unless longer retention is required for the client\u2019s service',
            'Client business data is retained for the duration of the service agreement plus 1 year for accounting purposes',
            'Website analytics data is retained for 12 months',
            'Upon verified deletion request, personal data is purged within 24 hours',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="7. Data Deletion">
        <p className="text-institutional-white/80 mb-4">
          You have the right to request deletion of your personal data at any time:
        </p>
        <div className="bg-institutional-white/5 border border-institutional-white/10 rounded-lg p-5 space-y-2 text-institutional-white/80 mb-4">
          <p>
            <span className="text-electric-cyan font-semibold">Email:</span>{' '}
            <a href="mailto:privacy@inspiron.tech" className="text-electric-cyan hover:text-action-gold transition-colors">
              privacy@inspiron.tech
            </a>{' '}
            &mdash; subject line: <em>&ldquo;DATA DELETION REQUEST&rdquo;</em>
          </p>
          <p><span className="text-electric-cyan font-semibold">WhatsApp:</span> Send &ldquo;DELETE&rdquo; to <strong>+880 1601-618030</strong></p>
          <p className="text-institutional-white/50 text-sm">Include your name and the phone number or email used to interact with our services.</p>
        </div>
        <p className="text-institutional-white/80 mb-3">
          We confirm deletion within <strong className="text-institutional-white">24 hours</strong> of a verified request.
        </p>
        <p className="text-institutional-white/80">
          For Facebook-specific data deletion, visit our{' '}
          <a href="/privacy/delete" className="text-electric-cyan hover:text-action-gold transition-colors underline">
            Data Deletion page
          </a>.
        </p>
      </Section>

      <Section title="8. Cookies">
        <p className="text-institutional-white/80">
          Our website uses essential cookies for basic functionality and optional analytics cookies
          to understand how visitors use the site. You may disable cookies through your browser
          settings. We do not use cookies for advertising or cross-site tracking.
        </p>
      </Section>

      <Section title="9. Security">
        <p className="text-institutional-white/80">
          We implement industry-standard security measures including HTTPS encryption, secure token
          storage, environment variable protection, and access controls to protect your data from
          unauthorised access, disclosure, or loss.
        </p>
      </Section>

      <Section title="10. Your Rights">
        <ul className="list-none space-y-2 mb-4">
          {[
            'Access the personal data we hold about you',
            'Correct inaccurate personal data',
            'Request deletion of your personal data',
            'Object to or restrict processing of your data',
            'Withdraw consent at any time where processing is based on consent',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-institutional-white/80">
          To exercise any of these rights, contact{' '}
          <a href="mailto:privacy@inspiron.tech" className="text-electric-cyan hover:text-action-gold transition-colors">
            privacy@inspiron.tech
          </a>.
        </p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p className="text-institutional-white/80">
          We may update this Privacy Policy periodically. We will notify clients of material changes
          via email or WhatsApp. Continued use of our services after changes are posted constitutes
          acceptance of the updated policy.
        </p>
      </Section>

      <Section title="12. Contact &amp; Data Controller">
        <div className="space-y-2 text-institutional-white/80">
          <p><strong className="text-institutional-white">Data Controller:</strong> INSPIRON TECH</p>
          <p>
            <span className="text-electric-cyan">Email:</span>{' '}
            <a href="mailto:privacy@inspiron.tech" className="text-electric-cyan hover:text-action-gold transition-colors">
              privacy@inspiron.tech
            </a>
          </p>
          <p><span className="text-electric-cyan">Phone/WhatsApp:</span> +880 1601-618030</p>
          <p><span className="text-electric-cyan">Address:</span> Dhaka, Bangladesh</p>
          <p>
            <span className="text-electric-cyan">Website:</span>{' '}
            <a href="https://www.inspiron.tech" className="text-electric-cyan hover:text-action-gold transition-colors">
              www.inspiron.tech
            </a>
          </p>
        </div>
      </Section>

      <hr className="border-institutional-white/10 my-10" />
      <p className="text-institutional-white/30 text-sm">&copy; 2026 INSPIRON TECH. All rights reserved.</p>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-action-gold mb-4 border-b border-institutional-white/10 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
