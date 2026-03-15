import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Use — Yap",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">March 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Terms of Use
        </h1>
        <p className="text-lg text-white/50 mb-16">
          We&apos;ve crafted these terms to be clear, compliant, and easy to
          follow.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              These Terms of Use (&quot;Terms&quot;) apply to all agreements
              between Philipp Tschauner (&quot;Yap,&quot; &quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) and you, our user
              (&quot;you&quot; or &quot;User&quot;). By downloading, installing,
              or using the Yap mobile application, you agree to be bound by
              these Terms. If you do not agree, please do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Services
            </h2>
            <p>
              Yap is a productivity app that uses AI-powered agents with unique
              personalities to motivate you to complete tasks. You select an
              agent, describe a mission, set a deadline, and receive
              AI-generated notifications that escalate in tone until you finish
              or the deadline expires.
            </p>
            <p className="mt-3">
              AI-generated messages are created using OpenAI&apos;s GPT-4o-mini.
              All notification content is generated dynamically and may vary.
              Notifications are delivered via Apple Push Notification Service
              (APNs) — your device token and timezone are stored on our server
              to schedule and deliver messages at the right time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Account &amp; access
            </h2>
            <p>
              You do not need to create a traditional account to use Yap. The
              app identifies your device using a locally generated unique
              identifier stored in your device&apos;s Keychain. No email
              address, name, or personal information is required.
            </p>
            <p className="mt-3">
              You may optionally sign in with Apple to link your data across
              devices. When you do, we only receive your anonymous Apple User ID
              — we do not request your name or email address.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Free &amp; Pro plans
            </h2>
            <p>
              Yap offers a free tier and a paid Pro tier. The free tier includes
              all 6 base agents, 1 mission per day, AI-powered messages, the
              global leaderboard, and quiet hours.
            </p>
            <p className="mt-3">
              Pro is a <strong className="text-white">one-time lifetime purchase</strong>{" "}
              (not a subscription) that unlocks unlimited daily missions, the
              Chaos Pack (3 special agents), Agent Memory, Custom Roast,
              custom deadlines, and the ability to extend deadlines by 24 hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. In-app purchases
            </h2>
            <p>
              In addition to Pro, Yap offers two agent packs as separate
              one-time purchases:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>
                <strong className="text-white">Chaos Pack</strong> — The Ex, The
                Theorist, The Colleague. Included free with Pro.
              </li>
              <li>
                <strong className="text-white">Legends Pack</strong> — Gordon
                Ramsay, Disappointed Dad, Gym Bro. Purchased separately.
              </li>
            </ul>
            <p className="mt-3">
              All purchases are processed through Apple&apos;s App Store and are
              subject to Apple&apos;s terms and refund policies. Purchases are
              non-transferable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Acceptable use
            </h2>
            <p>
              You agree to use Yap solely for personal productivity purposes.
              You may not use the app to generate harmful, abusive, or illegal
              content. Mission titles you enter are sent to OpenAI for
              AI-generated notification content — please do not include
              sensitive personal information in your mission descriptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. AI-generated content
            </h2>
            <p>
              Notification messages are generated by AI and may contain humor,
              sarcasm, or strong language depending on the agent&apos;s
              personality. This content is meant to be motivational and
              entertaining. We are not responsible for any offense or
              misunderstanding caused by AI-generated messages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Privacy
            </h2>
            <p>
              We take your privacy seriously. Please refer to our{" "}
              <a href="/privacy" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                Privacy Policy
              </a>{" "}
              for detailed information about how we collect, use, and protect
              your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Limitations of liability
            </h2>
            <p>
              Yap is provided &quot;as is&quot; without warranties of any kind.
              We shall not be liable for any direct, indirect, incidental,
              special, or consequential damages resulting from the use or
              inability to use the app, including but not limited to missed
              deadlines, lost productivity, or AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Modifications
            </h2>
            <p>
              We may update these Terms from time to time. If we make
              significant changes, we will update the date at the top of this
              page. By continuing to use Yap after updates become effective, you
              agree to the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Termination
            </h2>
            <p>
              You may stop using Yap at any time by deleting the app. We
              reserve the right to terminate or restrict access to the service
              if these Terms are violated or if we detect misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Contact
            </h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:support@yap.fail" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                support@yap.fail
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
