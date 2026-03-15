import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Legal Notice — Yap",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <p className="text-sm text-white/40 mb-4">March 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Legal Notice
        </h1>
        <p className="text-lg text-white/50 mb-16">
          Impressum gemäß § 5 TMG.
        </p>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Service provider
            </h2>
            <p>
              Philipp Tschauner
              <br />
              Berlin, Germany
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:support@yap.fail" className="text-white underline underline-offset-2 hover:text-white/70 transition-colors">
                support@yap.fail
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Responsibility for content
            </h2>
            <p>
              As a service provider, we are responsible for our own content on
              these pages in accordance with § 7 (1) TMG. However, according to
              §§ 8 to 10 TMG, we are not obligated to monitor transmitted or
              stored third-party information, or to investigate circumstances
              that indicate illegal activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Dispute resolution
            </h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (OS):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="mt-3">
              We are neither willing nor obliged to participate in dispute
              resolution proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
