import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Press Kit — Yap",
};

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">April 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Press Kit
        </h1>
        <p className="text-lg text-white/50 mb-16">
          Everything you need to write about Yap.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Quick Facts
            </h2>
            <ul className="space-y-2">
              <li>
                <strong className="text-white">App:</strong> Yap - AI Motivation
                Agency
              </li>
              <li>
                <strong className="text-white">Developer:</strong> Philipp
                Tschauner (Berlin, Germany)
              </li>
              <li>
                <strong className="text-white">Platform:</strong> iOS 17+
              </li>
              <li>
                <strong className="text-white">Price:</strong> Free (Pro upgrade:
                $9.99 one-time)
              </li>
              <li>
                <strong className="text-white">Category:</strong> Productivity
              </li>
              <li>
                <strong className="text-white">Languages:</strong> English,
                German, French, Spanish, Portuguese (PT), Portuguese (BR)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What is Yap?
            </h2>
            <p>
              Yap is the only productivity app that guilt-trips, roasts, and nags
              you through push notifications - starring 12 AI agents including
              your mom, your ex, and your drill sergeant.
            </p>
            <p className="mt-3">
              You set a task, pick a deadline, and choose an agent. The
              notifications are generated fresh by GPT-4o - never the same
              message twice. They escalate the longer the task goes unfinished.
              You can share personal weaknesses, and the agents weaponize them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              The 12 Agents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="text-white font-medium mb-2">Free Tier</p>
                <ul className="space-y-1">
                  <li>Mom - guilt trips</li>
                  <li>Best Friend - bro energy</li>
                  <li>Boss - corporate disappointment</li>
                  <li>Drill Sergeant - military yelling</li>
                  <li>Therapist - &quot;what&apos;s stopping you?&quot;</li>
                  <li>Grandma - survived a war</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Pro Agents</p>
                <ul className="space-y-1">
                  <li>The Ex - passive-aggressive</li>
                  <li>The Theorist - conspiracy fuel</li>
                  <li>The Colleague - office energy</li>
                  <li>Chef - kitchen nightmare</li>
                  <li>Disappointed Dad - just disappointed</li>
                  <li>Gym Bro - treats tasks like leg day</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Downloads
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="/presskit/appstore-en.txt"
                download
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                App Store Information (EN) ↓
              </a>
              <a
                href="/presskit/story.txt"
                download
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                The Story Behind Yap ↓
              </a>
            </div>
            <p className="mt-4 text-white/40 text-sm">
              Need screenshots, app icon, or other assets? Contact{" "}
              <a
                href="mailto:support@yap.fail"
                className="text-white/60 underline underline-offset-2 hover:text-white/40 transition-colors"
              >
                support@yap.fail
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact
            </h2>
            <p>
              Philipp Tschauner
              <br />
              Berlin, Germany
              <br />
              <a
                href="mailto:support@yap.fail"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                support@yap.fail
              </a>
              <br />
              <a
                href="https://x.com/yapAgency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                @yapAgency
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
