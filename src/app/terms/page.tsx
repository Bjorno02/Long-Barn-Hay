import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the Long Barn Hay website and our giveaways.',
  alternates: { canonical: '/terms' },
};

function H2({ children }: { children: React.ReactNode }): JSX.Element {
  return <h2 className="mb-3 mt-10 text-2xl font-bold text-steel-900">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }): JSX.Element {
  return <p className="mb-4 leading-relaxed text-steel-700">{children}</p>;
}

export default function TermsPage(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="mb-2 text-4xl font-bold text-steel-900 sm:text-5xl">Terms of Service</h1>
        <p className="mb-10 text-steel-500">
          Effective &amp; last updated: June 10, 2026 · {siteConfig.companyName},{' '}
          {siteConfig.address.fullAddress} ·{' '}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>{' '}
          · {siteConfig.phone}
        </p>

        <H2>1. Acceptance</H2>
        <P>
          By using this website (the &ldquo;Site&rdquo;) you agree to these Terms and our{' '}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          . The Site is operated by Long Barn Hay, Raymond, New Hampshire.
        </P>

        <H2>2. What the Site Is</H2>
        <P>
          The Site provides information about our hay products and services, a contact form for
          inquiries, and occasional giveaways.{' '}
          <strong>No prices, orders, or payments are processed on the Site.</strong> Pricing varies
          by quantity and fulfillment method; all sales are arranged directly by phone or email and
          are subject to availability.
        </P>

        <H2>3. Product Information</H2>
        <P>
          Product descriptions (cuts, bale types, characteristics) are general guidance, not a
          guarantee of nutritional content or suitability for any particular animal. Consult your
          veterinarian or equine nutritionist for feeding decisions. Hay is an agricultural product
          and varies naturally by harvest and conditions.
        </P>

        <H2>4. Giveaways</H2>
        <P>
          When we run a giveaway, the following default rules apply unless the giveaway page states
          otherwise:
        </P>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-steel-700">
          <li>
            <strong>No purchase necessary.</strong> A purchase does not improve your chances of
            winning.
          </li>
          <li>
            <strong>Eligibility:</strong> entrants must be 18 or older and located within our
            delivery area. Employees and immediate family of Long Barn Hay are not eligible.
          </li>
          <li>
            <strong>Entry:</strong> one entry per person via the form on our giveaway page.
            Duplicate or automated entries may be disqualified.
          </li>
          <li>
            <strong>Winner selection:</strong> winners are drawn at random from eligible entries and
            notified using the contact information provided. If a winner doesn&apos;t respond within
            7 days, we may draw an alternate.
          </li>
          <li>
            <strong>Prize:</strong> the stated quantity of hay, delivered within our delivery area
            or picked up at our location. No cash equivalent, substitution, or transfer.
          </li>
          <li>
            <strong>Not sponsored by Facebook:</strong> our giveaways are in no way sponsored,
            endorsed, administered by, or associated with Meta/Facebook.
          </li>
          <li>
            We may cancel or modify a giveaway if fraud or technical failure compromises it. Void
            where prohibited by law.
          </li>
        </ul>

        <H2>5. Contact Form Use</H2>
        <P>
          Use our forms for legitimate inquiries and entries only — no spam, harassment, or unlawful
          content. We use anti-bot measures and may disregard submissions flagged by them.
        </P>

        <H2>6. Intellectual Property</H2>
        <P>
          Site content — text, photos, and the Long Barn Hay name and logo — belongs to us.
          Don&apos;t republish or commercially exploit it without permission.
        </P>

        <H2>7. Disclaimers</H2>
        <P>
          The Site is provided &ldquo;as is&rdquo; without warranties of any kind. We don&apos;t
          guarantee the Site will be uninterrupted or error-free, or that information (including
          delivery lead times) is always current. Nothing on the Site constitutes veterinary or
          nutritional advice.
        </P>

        <H2>8. Limitation of Liability</H2>
        <P>
          To the fullest extent permitted by law, Long Barn Hay is not liable for indirect,
          incidental, or consequential damages arising from use of the Site. Our total liability for
          any claim related to the Site will not exceed $100. This section does not limit liability
          that cannot be limited by law, and terms for actual hay purchases are set at the time of
          sale.
        </P>

        <H2>9. Governing Law</H2>
        <P>
          These Terms are governed by the laws of the State of New Hampshire. Disputes shall be
          brought in the state or federal courts of New Hampshire.
        </P>

        <H2>10. Changes</H2>
        <P>
          We may update these Terms; the date above reflects the current version, posted on this
          page.
        </P>
      </div>
    </div>
  );
}
