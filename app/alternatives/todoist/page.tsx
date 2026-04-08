import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AgentTestimonials from "../../components/AgentTestimonials";

export const metadata = {
  title: "Todoist Alternative That Roasts You — Yap",
  description:
    "Tired of polite reminders? Yap is the Todoist alternative with 12 AI agents that guilt-trip and nag you until the task is done. No checkboxes. Just chaos.",
  keywords:
    "todoist alternative, todoist vs yap, todo app alternative, task manager alternative, productivity app, motivation app",
  openGraph: {
    title: "Todoist Alternative That Roasts You — Yap",
    description:
      "The to-do app that fights back. 12 AI agents. Escalating notifications. Zero chill.",
    url: "https://yap.fail/alternatives/todoist",
  },
  alternates: {
    canonical: "https://yap.fail/alternatives/todoist",
  },
};

const testimonials = [
  {
    agent: "Mom",
    emoji: "🫵",
    quote:
      "A to-do list? That's cute. You know what else was on your to-do list? Calling me back. THREE WEEKS AGO. But sure, add another checkbox, sweetie.",
    avatar: "/agents/mom.png",
  },
  {
    agent: "Drill Sergeant",
    emoji: "🪖",
    quote:
      "YOUR TO-DO LIST HAS 47 ITEMS AND YOU'VE COMPLETED TWO. ONE OF THEM WAS 'MAKE TO-DO LIST.' THAT DOES NOT COUNT, SOLDIER.",
    avatar: "/agents/drill.png",
  },
  {
    agent: "The Ex",
    emoji: "💔",
    quote:
      "Oh, you're switching apps again? You switched relationship counselors three times too. Maybe the app isn't the problem?",
    avatar: "/agents/ex.png",
  },
  {
    agent: "Boss",
    emoji: "👔",
    quote:
      "Quick sync: I noticed you moved 'finish presentation' to tomorrow. For the fourth time. I'm sure the client will understand. Per my last notification.",
    avatar: "/agents/boss.png",
  },
  {
    agent: "The Colleague",
    emoji: "😊",
    quote:
      "Oh, you use Todoist? That's so organized of you! I just... do things? When they need doing? But no, a list is great too. Really. 🙂",
    avatar: "/agents/passiveAggressiveColleague.png",
  },
  {
    agent: "Grandma",
    emoji: "👵",
    quote:
      "In my day we didn't have apps. We just did things. Or Grandpa gave us that look. You know the look. Imagine that, but on your phone.",
    avatar: "/agents/grandma.png",
  },
];

export default function TodoistAlternative() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />

      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">The Alternative</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          The Todoist Alternative That Fights Back
        </h1>
        <p className="text-lg text-white/50 mb-16">
          Todoist is great. Beautiful. Organized. You ignored it anyway.
          Let&apos;s try something different.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Todoist: 10/10. Your Follow-Through: 2/10.
            </h2>
            <p>
              Let&apos;s be real. Todoist is a fantastic app. The design is
              clean. The features are deep. The natural language input is
              genuinely impressive.
            </p>
            <p className="mt-4">
              And you still have 23 overdue tasks sitting there like a graveyard
              of good intentions.
            </p>
            <p className="mt-4">
              That&apos;s because Todoist is a{" "}
              <strong className="text-white">list</strong>. Lists don&apos;t
              care. Lists don&apos;t judge. Lists sit there quietly while you
              binge-watch a show about people who are more productive than you.
            </p>
            <p className="mt-4">
              Yap is not a list.{" "}
              <strong className="text-white">
                Yap is 12 AI agents who have opinions about your life choices.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Todoist vs Yap — Honest Comparison
            </h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">
                      Feature
                    </th>
                    <th className="text-left py-3 px-4 text-white font-semibold">
                      Todoist
                    </th>
                    <th className="text-left py-3 pl-4 text-white font-semibold">
                      Yap
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/60">
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">Organizes tasks</td>
                    <td className="py-3 px-4">✅ Beautifully</td>
                    <td className="py-3 pl-4">One at a time</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">Reminds you</td>
                    <td className="py-3 px-4">Polite notification</td>
                    <td className="py-3 pl-4">Emotional warfare</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">When you ignore it</td>
                    <td className="py-3 px-4">Nothing happens</td>
                    <td className="py-3 pl-4">Escalation begins</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">Personality</td>
                    <td className="py-3 px-4">Neutral</td>
                    <td className="py-3 pl-4">12 unhinged agents</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">AI-generated messages</td>
                    <td className="py-3 px-4">❌</td>
                    <td className="py-3 pl-4">Every notification unique</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">Makes you feel guilty</td>
                    <td className="py-3 px-4">Only yourself</td>
                    <td className="py-3 pl-4">Professionally</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4">Projects & subtasks</td>
                    <td className="py-3 px-4">✅ Advanced</td>
                    <td className="py-3 pl-4">❌ One mission. Focus.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Your excuses</td>
                    <td className="py-3 px-4">Accepted silently</td>
                    <td className="py-3 pl-4">Read and destroyed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              &ldquo;So Yap Replaces Todoist?&rdquo;
            </h2>
            <p>
              Not exactly. Todoist is great for organizing your life. Yap is
              great for <strong className="text-white">actually doing the things</strong>{" "}
              you organized.
            </p>
            <p className="mt-4">
              Think of it this way: Todoist is the responsible adult who writes a
              grocery list. Yap is your mom calling because she knows you&apos;re
              standing in the kitchen eating cereal for dinner again.
            </p>
            <p className="mt-4">
              You can use both. Todoist for the big picture. Yap for the{" "}
              <strong className="text-white">
                &ldquo;I really need to do this specific thing in the next 45
                minutes or my agent will question my entire existence&rdquo;
              </strong>{" "}
              moments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What the Agents Think About Your To-Do List
            </h2>
            <AgentTestimonials testimonials={testimonials} />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Why People Switch (or Add Yap)
            </h2>
            <ul className="list-disc list-inside mt-3 space-y-3">
              <li>
                <strong className="text-white">
                  &ldquo;I had 200+ tasks in Todoist and felt paralyzed&rdquo;
                </strong>{" "}
                — Yap forces one mission at a time. No overwhelm. Just do this
                one thing.
              </li>
              <li>
                <strong className="text-white">
                  &ldquo;Notifications from todo apps are too easy to
                  dismiss&rdquo;
                </strong>{" "}
                — Yap notifications escalate. Ignoring them makes them worse.
                Good luck.
              </li>
              <li>
                <strong className="text-white">
                  &ldquo;I needed external pressure, not a pretty
                  checklist&rdquo;
                </strong>{" "}
                — That&apos;s literally why we exist. Pick an agent. Feel the
                pressure.
              </li>
              <li>
                <strong className="text-white">
                  &ldquo;I wanted to laugh while being productive&rdquo;
                </strong>{" "}
                — The Drill Sergeant yelling about your laundry in ALL CAPS
                is somehow motivating. We don&apos;t make the rules.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Your Move
            </h2>
            <p>
              You can keep reorganizing your Todoist labels. Or you can download
              Yap, pick an agent, and actually do the thing that&apos;s been
              sitting at the top of your list for two weeks. Your call.
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
              iOS only. We respect Todoist. We just think your tasks deserve
              someone who yells.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
