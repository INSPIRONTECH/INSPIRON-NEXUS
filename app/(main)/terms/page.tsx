import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | INSPIRON TECH',
  description: 'Terms of Service for INSPIRON TECH digital services and automation solutions.',
};

export default function TermsOfService() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 text-institutional-white font-institutional">

      <header className="mb-12">
        <p className="text-electric-cyan text-sm font-semibold tracking-widest uppercase mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-institutional-white mb-3">
          Terms of Service
        </h1>
        <p className="text-institutional-white/50 text-sm">
          INSPIRON TECH · Last updated: March 25, 2026
        </p>
      </header>

      <Section title="1. Acceptance of Terms">
        <p className="text-institutional-white/80">
          By accessing or using any services provided by INSPIRON TECH (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Company&rdquo;),
          you agree to be bound by these Terms of Service. If you do not agree, please do not use our
          services. INSPIRON TECH is a technology consulting and digital automation company registered
          and operating in Dhaka, Bangladesh.
        </p>
      </Section>

      <Section title="2. Services Provided">
        <p className="text-institutional-white/80 mb-3">INSPIRON TECH provides the following services to businesses and individuals:</p>
        <ul className="list-none space-y-2">
          {[
            'WhatsApp Business automation and messaging integration via Meta Cloud API',
            'Facebook and Instagram Page management and content automation',
            'ERP implementation and consulting using Manager.io cloud accounting software',
            'Custom web application development (Next.js, React)',
            'Business process automation and API integrations',
            'IT consulting for small and medium-sized businesses (SMEs) in Bangladesh',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="3. Use of Meta Platform Data">
        <p className="text-institutional-white/80 mb-3">
          In the course of providing WhatsApp Business and Facebook/Instagram services, INSPIRON TECH
          may access Meta Platform Data on behalf of our clients. This data is used exclusively to:
        </p>
        <ul className="list-none space-y-2 mb-4">
          {[
            'Send automated business messages (e.g., invoices, order confirmations, service updates) to end customers on behalf of our clients',
            'Manage and publish content to client Facebook Pages and Instagram accounts',
            'Retrieve engagement metrics for internal reporting purposes',
            'Route customer inquiries from social platforms to client CRM or support systems',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-institutional-white/60 text-sm border-l-2 border-electric-cyan pl-4">
          Meta Platform Data is never sold, transferred, or shared with third parties outside the scope
          of delivering the services described above. All data handling complies with Meta&apos;s Platform
          Terms and Developer Policies.
        </p>
      </Section>

      <Section title="4. Client Responsibilities">
        <ul className="list-none space-y-2">
          {[
            'Provide accurate business information and necessary account access credentials',
            'Ensure their business complies with all applicable Meta, WhatsApp, and platform policies',
            'Not use INSPIRON TECH services for spam, harassment, or any unlawful purpose',
            'Maintain the confidentiality of API tokens and access credentials shared for service delivery',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-institutional-white/80">
              <span className="text-action-gold mt-1 shrink-0">&rsaquo;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p className="text-institutional-white/80">
          All custom code, tools, dashboards, and automation workflows developed by INSPIRON TECH remain
          the intellectual property of INSPIRON TECH unless explicitly transferred to the client under a
          separate written agreement. Clients are granted a non-exclusive license to use deliverables for
          their intended business purpose.
        </p>
      </Section>

      <Section title="6. Data Privacy">
        <p className="text-institutional-white/80">
          INSPIRON TECH is committed to protecting personal data. Our data collection and processing
          practices are described in our{' '}
          <a href="/privacy" className="text-electric-cyan hover:text-action-gold transition-colors underline">
            Privacy Policy
          </a>.
          We comply with applicable data protection laws in Bangladesh and respect the privacy rights
          of end users whose data we process on behalf of clients.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p className="text-institutional-white/80">
          INSPIRON TECH shall not be liable for any indirect, incidental, or consequential damages
          arising from the use of our services. Our total liability to any client shall not exceed
          the amount paid for the specific service giving rise to the claim in the preceding 30 days.
        </p>
      </Section>

      <Section title="8. Service Termination">
        <p className="text-institutional-white/80">
          Either party may terminate a service engagement with 7 days written notice. INSPIRON TECH
          reserves the right to immediately suspend services if a client violates these Terms,
          applicable platform policies, or engages in unlawful activity.
        </p>
      </Section>

      <Section title="9. Changes to Terms">
        <p className="text-institutional-white/80">
          INSPIRON TECH may update these Terms of Service from time to time. Continued use of our
          services after changes are posted constitutes acceptance of the revised terms. We will
          notify active clients of material changes via email or WhatsApp.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p className="text-institutional-white/80">
          These Terms are governed by the laws of the People&apos;s Republic of Bangladesh. Any disputes
          arising from these Terms shall be subject to the jurisdiction of the courts of Dhaka, Bangladesh.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <div className="space-y-2 text-institutional-white/80">
          <p><span className="text-electric-cyan">Email:</span> admin@inspiron.tech</p>
          <p><span className="text-electric-cyan">WhatsApp:</span> +880 1601-618030</p>
          <p>
            <span className="text-electric-cyan">Website:</span>{' '}
            <a href="https://www.inspiron.tech" className="text-electric-cyan hover:text-action-gold transition-colors">
              www.inspiron.tech
            </a>
          </p>
          <p><span className="text-electric-cyan">Address:</span> Dhaka, Bangladesh</p>
        </div>
      </Section>

      <hr className="border-institutional-white/10 my-10" />
      <p className="text-institutional-white/30 text-sm">
        &copy; 2026 INSPIRON TECH. All rights reserved.
      </p>
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
