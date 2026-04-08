import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AgentTestimonials from "../components/AgentTestimonials";

export const metadata = {
  title: "AI Accountability Partner App — Yap",
  description:
    "12 AI accountability partners that actually hold you accountable. No more gentle reminders. Escalating push notifications until the job is done.",
  keywords:
    "accountability partner, accountability app, AI accountability, body doubling app, productivity partner, motivation accountability",
  openGraph: {
    title: "AI Accountability Partner App — Yap",
    description:
      "12 AI agents that hold you accountable with escalating notifications.",
    url: "https://yap.fail/accountability-partner",
  },
  alternates: {
    canonical: "https://yap.fail/accountability-partner",
  },
};

const testimonials = [
  {
    agent: "Boss",
    emoji: "👔",
    quote:
      "Per my last notification: the deliverable is overdue. I've CC'd your conscience. Regards.",
    avatar: "/agents/boss.png",
  },
  {
    agent: "Mom",
    emoji: "🫵",
    quote:
      "An accountability partner? I've been your accountability partner for 28 years. You just stopped answering my calls.",
    avatar: "/agents/mom.png",
  },
  {
    agent: "Best Friend",
    emoji: "🫶",
    quote:
      "bro i literally watched you set this deadline and then immediately open twitter. i have screenshots. don't test me 💀",
    avatar: "/agents/bestFriend.png",
  },
  {
    agent: "The Theorist",
    emoji: "🛸",
    quote:
      "Traditional accountability partners are COMPROMISED. They tell you 'it's okay' when it ISN'T. I will never lie to you. The TRUTH is you're behind schedule.",
    avatar: "/agents/conspiracyTheorist.png",
  },
  {
    agent: "The Ex",
    emoji: "💔",
    quote:
      "You want someone to hold you accountable? Interesting. That's literally all I asked for and you said I was 'too much.' But sure, pay an app for it.",
    avatar: "/agents/ex.png",
  },
  {
    agent: "Therapist",
    emoji: "🛋️",
    quote:
      "The fact that you need an external system to follow through — let's sit with that. What does it say about how you relate to your own commitments?",
    avatar: "/agents/therapist.png",
  },
];

export default function AccountabilityPartner() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />

      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">The Partner You Deserve</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          AI Accountability Partner
        </h1>
        <p className="text-lg text-white/50 mb-16">
          Finding an accountability partner is hard. Finding one who won&apos;t
          let you off the hook is harder. Finding 12 of them is Yap.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              The Problem With Human Accountability Partners
            </h2>
            <p>
              They cancel. They forget. They say &ldquo;don&apos;t worry about
              it&rdquo; when you should absolutely worry about it. They have
              their own lives. The worst ones are also procrastinators — so now
              you&apos;re just two people not doing things together.
            </p>
            <p className="mt-4">
              You don&apos;t need a friend who nods sympathetically. You need
              someone who looks at your excuses and goes{" "}
              <strong className="text-white">
                &ldquo;That&apos;s fascinating. Now open the laptop.&rdquo;
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12 AI Agents That Never Cancel on You
            </h2>
            <p>
              Your Yap agent doesn&apos;t have a &ldquo;something came up&rdquo;
              excuse. They don&apos;t go on vacation. They don&apos;t fall
              asleep. They sit in your notification center like a very judgmental
              gargoyle, waiting for you to either finish the task or give up so
              they can roast you for that too.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong className="text-white">Mom</strong> — Guilt that
                escalates to generational trauma territory
              </li>
              <li>
                <strong className="text-white">Boss</strong> — Corporate
                passive-aggression you can&apos;t reply-all to
              </li>
              <li>
                <strong className="text-white">Drill Sergeant</strong> — Volume
                that you can somehow hear through text
              </li>
              <li>
                <strong className="text-white">Therapist</strong> — Asks you
                hard questions. Waits. Doesn&apos;t blink.
              </li>
              <li>
                <strong className="text-white">The Ex</strong> — &ldquo;Typical&rdquo;
                (that&apos;s the whole strategy, and it works)
              </li>
              <li>
                <strong className="text-white">+ 7 more agents</strong> — Each
                with their own brand of productive chaos
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              How Yap Holds You Accountable
            </h2>
            <p>
              You tell us what you need to do. You pick who holds you to it. You
              set a deadline. Then the notifications start.
            </p>
            <p className="mt-4">
              They&apos;re not reminders. They&apos;re{" "}
              <strong className="text-white">escalations</strong>. Your agent
              starts nice (ish) and progressively loses their patience. By
              level 5, your Mom agent is telling you about her friend&apos;s son
              who already has three promotions AND a clean apartment.
            </p>
            <p className="mt-4">
              Every message is AI-generated. Never the same twice. Some agents
              remember your past missions. They keep receipts. Did you give up
              on &ldquo;morning jog&rdquo; last week? The Ex will bring it up.
              Trust us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What Your New Partners Think of You
            </h2>
            <AgentTestimonials testimonials={testimonials} />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Accountability, But Make It Unhinged
            </h2>
            <p>
              Other accountability apps give you checkboxes and streak counters.
              Those work great — for the first 4 days. Then you skip a day, the
              streak breaks, and you abandon the app forever because looking at
              it makes you feel bad.
            </p>
            <p className="mt-4">
              Yap doesn&apos;t care about your streak. Yap cares about{" "}
              <strong className="text-white">right now</strong>. One mission.
              One deadline. One agent breathing down your neck until it&apos;s
              done.
            </p>
            <p className="mt-4">
              No habit tracking. No journaling. No 47-step morning routine. Just{" "}
              <strong className="text-white">
                do the thing before the Drill Sergeant has an aneurysm.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Ready to Be Held Accountable?
            </h2>
            <p>
              Your agents are ready. They&apos;ve been ready. They&apos;ve been
              watching you scroll for the past 3 minutes. Pick one. Set a
              mission. Try not to disappoint them.
            </p>
            <p className="mt-6">
              <a
                href="https://apps.apple.com/app/id6761190023"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Download Yap — it&apos;s free
              </a>
            </p>
            <p className="text-sm text-white/30 mt-4">
              Available on iOS. 6 agents free. 6 that go nuclear with Pro.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
