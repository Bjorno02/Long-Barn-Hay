import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Long Barn Hay handles the limited personal information collected through our website.',
  alternates: { canonical: '/privacy' },
};

function H2({ children }: { children: React.ReactNode }): JSX.Element {
  return <h2 className="mb-3 mt-10 text-2xl font-bold text-steel-900">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }): JSX.Element {
  return <p className="mb-4 leading-relaxed text-steel-700">{children}</p>;
}

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="mb-2 text-4xl font-bold text-steel-900 sm:text-5xl">Privacy Policy</h1>
        <p className="mb-10 text-steel-500">
          Effective &amp; last updated: June 10, 2026 · {siteConfig.companyName},{' '}
          {siteConfig.address.fullAddress} ·{' '}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>{' '}
          · {siteConfig.phone}
        </p>

        <P>
          Long Barn Hay is a hay supplier in Chester, New Hampshire. Our website collects very
          little, and here is all of it.
        </P>

        <H2>What We Collect</H2>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-steel-700">
          <li>
            <strong>Contact form:</strong> your name, email address, phone number (optional), and
            message — used to respond to your inquiry, provide pricing, and arrange delivery or
            pickup.
          </li>
          <li>
            <strong>Giveaway entries:</strong> your name, email address, and phone number (optional)
            — used solely to administer the giveaway, select winners, and contact you if you win.
          </li>
          <li>
            <strong>Hosting logs:</strong> our hosting provider keeps standard server logs (IP
            address, request time) for security and operations.
          </li>
        </ul>
        <P>
          Both forms are voluntary. The site sets <strong>no cookies</strong>, runs{' '}
          <strong>no analytics or trackers</strong>, and has no accounts or online payments. Form
          submissions are delivered to us by email via <strong>Resend</strong> (a delivery service)
          and received in a <strong>Gmail</strong> inbox; those providers process the data under
          their own policies.
        </P>

        <H2>What We Don&apos;t Do</H2>
        <P>
          We do <strong>not</strong> sell personal data, share it for marketing, run targeted
          advertising, or profile anyone. Giveaway entries are not added to any marketing list —
          they&apos;re used for the giveaway, then deleted within a reasonable time after winners
          are notified.
        </P>

        <H2>Retention</H2>
        <P>
          Contact inquiries are kept only as long as needed to handle your request and any follow-up
          business (generally no more than 2 years). Giveaway entries are deleted after the giveaway
          concludes and winners are confirmed.
        </P>

        <H2>Your Rights</H2>
        <P>
          Email {siteConfig.contactEmail} or call {siteConfig.phone} and we&apos;ll confirm what we
          have from you, correct it, or delete it (except records we must keep by law). We
          won&apos;t treat you differently for asking. New Hampshire residents: these rights align
          with the NH Data Privacy Act (RSA 507-H); if we ever decline a request, we&apos;ll explain
          why, you may appeal by replying to us, and you may contact the NH Attorney General&apos;s
          Consumer Protection Bureau.
        </P>

        <H2>Children</H2>
        <P>
          Our site and giveaway are not directed to children under 13, and we don&apos;t knowingly
          collect their information (COPPA). Giveaway entrants must be 18 or older. If a child has
          submitted information, contact us and we&apos;ll delete it.
        </P>

        <H2>Do Not Track</H2>
        <P>
          We don&apos;t track anyone across the web, so the site treats all visitors the same
          regardless of Do Not Track or Global Privacy Control signals — there&apos;s no tracking or
          data sale to opt out of.
        </P>

        <H2>Third-Party Links</H2>
        <P>
          Our site links to our Facebook page and other external sites; their privacy practices are
          their own.
        </P>

        <H2>Changes</H2>
        <P>
          If this policy changes, we&apos;ll update the date above and post the new version on this
          page.
        </P>

        <p className="mt-10 text-sm text-steel-500">
          See also our{' '}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
