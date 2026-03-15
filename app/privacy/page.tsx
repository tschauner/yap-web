import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — Yap",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">March 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-white/50 mb-16">
          Your data is yours. Here&apos;s exactly what we collect and why.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Who we are
            </h2>
            <p>
              Yap is developed by Philipp Tschauner, based in Berlin, Germany.
              If you have questions about this policy, contact us at{" "}
              <a href="mailto:support@yap.fail" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                support@yap.fail
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. What we collect
            </h2>
            <p>We collect as little as possible. Here&apos;s the full list:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-white">Device ID</strong> — A randomly
                generated UUID stored in your device&apos;s Keychain. This is
                not your Apple IDFA or IDFV. It&apos;s used solely to associate
                your missions with your device.
              </li>
              <li>
                <strong className="text-white">Mission data</strong> — Your
                mission title, selected agent, language, deadline, status
                (active/completed/given up), completion time, escalation level,
                and whether AI copy was used.
              </li>
              <li>
                <strong className="text-white">Apple User ID</strong>{" "}
                (optional) — If you sign in with Apple for cross-device sync, we
                store your anonymous Apple User ID. We never request your name
                or email.
              </li>
              <li>
                <strong className="text-white">Pro status</strong> — Whether
                your device has an active Pro purchase, for feature gating.
              </li>
              <li>
                <strong className="text-white">APNs device token</strong> — When
                you grant notification permissions, your Apple Push
                Notification Service (APNs) device token is stored on our
                server so we can deliver scheduled notifications to your
                device.
              </li>
              <li>
                <strong className="text-white">Timezone</strong> — Your
                device&apos;s timezone is stored to respect quiet hours and
                deliver notifications at appropriate local times.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. What we don&apos;t collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>No email addresses</li>
              <li>No real names</li>
              <li>No phone numbers</li>
              <li>No location data</li>
              <li>No contacts or photos</li>
              <li>No advertising identifiers (IDFA)</li>
              <li>No browsing history or usage tracking across apps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. How we use your data
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Mission data</strong> is used to
                generate AI notification content, populate the global leaderboard
                (anonymized, aggregated stats only), and provide Agent Memory
                for special agents.
              </li>
              <li>
                <strong className="text-white">Device ID</strong> is used for
                row-level security — your device can only access its own data.
              </li>
              <li>
                <strong className="text-white">Apple User ID</strong> is used
                only to link multiple devices to the same data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Third-party services
            </h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-white">Supabase</strong> (database &amp;
                edge functions) — Hosted in the EU. Stores your mission data and
                device ID. Subject to Supabase&apos;s{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong className="text-white">OpenAI</strong> (AI content
                generation) — Your mission title, agent personality, and
                language are sent to OpenAI&apos;s API to generate notification
                messages. No device IDs or personal identifiers are sent.
                Subject to OpenAI&apos;s{" "}
                <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Apple Push Notification Service (APNs)</strong>{" "}
                — We use APNs to deliver scheduled notifications to your
                device. Your APNs device token is sent to Apple&apos;s servers
                to route notifications. No mission content or personal data is
                shared with Apple beyond what is required for delivery.
                Subject to Apple&apos;s{" "}
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                  privacy policy
                </a>
                .
              </li>
            </ul>
            <p className="mt-3">
              We do not use any analytics SDKs, advertising networks, crash
              reporting tools, or any other third-party trackers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Notifications
            </h2>
            <p>
              Yap uses <strong className="text-white">remote push notifications</strong>{" "}
              delivered via Apple Push Notification Service (APNs). When you
              start a mission, AI-generated notification messages are created
              on our server and scheduled for delivery at specific times.
              These notifications are sent from our server through APNs to
              your device.
            </p>
            <p className="mt-3">
              To enable this, we store your APNs device token and timezone
              on our server. Notification content (the AI-generated messages)
              is stored server-side until delivered. We respect your quiet
              hours settings by checking your device&apos;s timezone before
              sending.
            </p>
            <p className="mt-3">
              You can disable notifications at any time through your
              device&apos;s Settings app. If you revoke notification
              permissions, no further push notifications will be delivered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Data storage &amp; security
            </h2>
            <p>
              Mission data is stored in a Supabase PostgreSQL database with
              row-level security policies. Each device can only read and modify
              its own data, enforced via the device ID sent in request headers.
            </p>
            <p className="mt-3">
              Local data on your device includes your settings, cached AI
              content, and your device ID (stored in the iOS Keychain for
              persistence).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Data retention &amp; deletion
            </h2>
            <p>
              Your mission data is retained as long as you use the app. If you
              delete the app, your local data is removed. To request deletion of
              your server-side data, contact us at{" "}
              <a href="mailto:support@yap.fail" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                support@yap.fail
              </a>{" "}
              and we will delete all data associated with your device ID.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Children&apos;s privacy
            </h2>
            <p>
              Yap is not intended for children under the age of 13. We do not
              knowingly collect data from children. If you believe a child has
              provided us with data, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Your rights (GDPR)
            </h2>
            <p>
              If you are located in the European Economic Area, you have the
              right to access, correct, or delete your personal data. You also
              have the right to data portability and to object to processing.
              Contact us at{" "}
              <a href="mailto:support@yap.fail" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                support@yap.fail
              </a>{" "}
              to exercise any of these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected by updating the date at the top of this page. Your
              continued use of Yap constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
