import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AgentTestimonials from "../components/AgentTestimonials";

export const metadata = {
  title: "Best App for Procrastination — Yap",
  description:
    "Stop procrastinating with 12 AI agents that guilt-trip, roast, and nag you until the task is done. Not the gentle reminder kind.",
  keywords:
    "procrastination app, stop procrastinating, anti procrastination, productivity app, motivation app, AI accountability",
  openGraph: {
    title: "Best App for Procrastination — Yap",
    description:
      "12 AI agents that guilt-trip, roast, and nag you until the task is done.",
    url: "https://yap.fail/procrastination-app",
  },
  alternates: {
    canonical: "https://yap.fail/procrastination-app",
  },
};

const testimonials = [
  {
    agent: "Mom",
    avatar: "/agents/mom.png",
    quote:
      "You've been 'about to start' for three hours. Mrs. Henderson's daughter finished her entire thesis today. I'm just saying.",
  },
  {
    agent: "The Ex",
    avatar: "/agents/ex.png",
    quote:
      "You procrastinating? Wow. Shocked. This is my shocked face. Remember when you said you'd 'definitely call back'? Same energy.",
  },
  {
    agent: "Drill Sergeant",
    avatar: "/agents/drill.png",
    quote:
      "THAT CURSOR HAS BEEN BLINKING ON THE SAME LINE FOR 47 MINUTES. ARE YOU WRITING A REPORT OR A RANSOM NOTE?!",
  },
  {
    agent: "Therapist",
    avatar: "/agents/therapist.png",
    quote:
      "Let's explore why you opened Instagram instead of the spreadsheet. What were you hoping to find there that the spreadsheet couldn't give you?",
  },
  {
    agent: "The Colleague",
    avatar: "/agents/colleague.png",
    quote:
      "Oh no, take your time! I already finished my part. And Karen's. And the presentation. But you do you 🙂",
  },
  {
    agent: "Grandma",
    avatar: "/agents/grandma.png",
    quote:
      "Your grandfather built a house by hand in 1962. You can't even open a Word document. But I still love you, sweetheart.",
  },
];

export default function ProcrastinationApp() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />

      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">The Intervention</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          The Best App for Procrastination
        </h1>
        <p className="text-lg text-white/50 mb-16">
          You opened this page instead of doing the thing. Classic. Let&apos;s
          fix that.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Your To-Do App Didn&apos;t Work. We Know.
            </h2>
            <p>
              You&apos;ve tried them all. The minimalist one. The one with the
              gamification. The one that lets you grow a virtual tree. You know
              what happened? You procrastinated on using the procrastination app.
              The tree died. You felt worse.
            </p>
            <p className="mt-4">
              The problem isn&apos;t the list. You know what you need to do. The
              problem is that nobody is standing behind you going{" "}
              <strong className="text-white">
                &ldquo;are you SERIOUSLY still on your phone?&rdquo;
              </strong>
            </p>
            <p className="mt-4">That&apos;s where Yap comes in.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              How It Works (It&apos;s Embarrassingly Simple)
            </h2>
            <ol className="list-decimal list-inside mt-3 space-y-3">
              <li>
                <strong className="text-white">Tell us what you&apos;re avoiding.</strong>{" "}
                &ldquo;Clean the kitchen.&rdquo; &ldquo;Write the report.&rdquo;
                &ldquo;Respond to that email from 11 days ago.&rdquo;
              </li>
              <li>
                <strong className="text-white">Pick an agent.</strong> Mom?
                Drill Sergeant? Your ex? (Yes, really. It works. We don&apos;t
                know why either.)
              </li>
              <li>
                <strong className="text-white">Set a deadline.</strong> 30
                minutes. 2 hours. Whatever your serotonin can handle.
              </li>
              <li>
                <strong className="text-white">Get yapped at.</strong> Your
                agent sends push notifications that escalate from gentle nudges
                to full emotional meltdowns. All AI-generated, never the same
                twice.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              &ldquo;But I LIKE Procrastinating&rdquo;
            </h2>
            <p>
              No you don&apos;t. You like the first 20 minutes. Then it&apos;s
              just anxiety with a phone in your hand. You scroll past the same 4
              memes. You check if the fridge grew new food since last time (it
              didn&apos;t). You open the task, stare at it, close it, and open
              TikTok.
            </p>
            <p className="mt-4">
              Meanwhile, your Yap agent is watching. Learning. Escalating.
            </p>
            <p className="mt-4">
              Level 1:{" "}
              <em className="text-white/50">
                &ldquo;Hey, just checking in! 😊&rdquo;
              </em>
              <br />
              Level 3:{" "}
              <em className="text-white/50">
                &ldquo;The deadline was 20 minutes ago. I&apos;m not mad. Just
                disappointed.&rdquo;
              </em>
              <br />
              Level 5:{" "}
              <em className="text-white/50">
                &ldquo;I TOLD EVERYONE AT BOOK CLUB ABOUT YOUR SITUATION. THEY
                ALL AGREE.&rdquo;
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What the Agents Think About Procrastinators
            </h2>
            <AgentTestimonials testimonials={testimonials} />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              The Science (Sort Of)
            </h2>
            <p>
              Procrastination isn&apos;t a time management problem — it&apos;s
              an emotion regulation problem. You avoid tasks that feel boring,
              overwhelming, or uncomfortable.
            </p>
            <p className="mt-4">
              Most apps try to solve this with better lists and prettier
              interfaces. That&apos;s like giving a drowning person a nicer pool.
            </p>
            <p className="mt-4">
              Yap works because it adds{" "}
              <strong className="text-white">social pressure</strong> — the
              single most effective motivator for humans. Except instead of
              disappointing a real person, you&apos;re disappointing an AI that
              sounds exactly like your mother. Somehow that&apos;s worse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12 Agents. 12 Flavors of Guilt.
            </h2>
            <p>
              6 free agents. 6 Pro agents. From your{" "}
              <strong className="text-white">disappointed grandma</strong> to a{" "}
              <strong className="text-white">conspiracy theorist</strong> who
              thinks the government doesn&apos;t want you to finish your
              presentation.
            </p>
            <p className="mt-4">
              Each agent has their own voice, personality, and escalation style.
              They remember your past missions. They keep receipts. If you gave
              up last time, they will bring it up. Zero mercy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Still Reading? Typical.
            </h2>
            <p>
              You&apos;ve now spent at least 2 minutes reading about a
              procrastination app instead of doing the thing you&apos;re
              procrastinating on. The irony is not lost on any of us.
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
              Available on iOS. Android users: we see you procrastinating too.
              Coming soon.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
