export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          License Compliance for Engineering Teams
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Stop Shipping{" "}
          <span className="text-[#58a6ff]">License Violations</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          LicenseGuard connects to your GitHub repos and automatically scans{" "}
          <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">package.json</code> and{" "}
          <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">requirements.txt</code> for
          incompatible licenses — before they become legal problems.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Scanning — $10/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required for trial.</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="font-semibold text-white mb-2">Deep Dependency Scan</h3>
            <p className="text-sm text-[#8b949e]">Parses package.json, requirements.txt, Gemfile, and more to surface every dependency and its license.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⚠️</div>
            <h3 className="font-semibold text-white mb-2">Risk Alerts</h3>
            <p className="text-sm text-[#8b949e]">Flags GPL, AGPL, and other copyleft licenses that may conflict with your commercial product.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="font-semibold text-white mb-2">Compliance Reports</h3>
            <p className="text-sm text-[#8b949e]">Generate shareable PDF reports for your legal team with full dependency trees and license breakdowns.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$10</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited GitHub repos",
              "package.json & requirements.txt scanning",
              "License compatibility database",
              "Email alerts on new violations",
              "Shareable compliance reports",
              "Background auto-scan on push"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which licenses are flagged as risky?</h3>
            <p className="text-sm text-[#8b949e]">We flag strong copyleft licenses like GPL-2.0, GPL-3.0, AGPL-3.0, and LGPL by default. You can customize the ruleset for your organization's policy.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it scan private repositories?</h3>
            <p className="text-sm text-[#8b949e]">Yes. We use GitHub OAuth with read-only access to your repositories. Private repos are fully supported and your code never leaves GitHub's servers.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How often are scans run?</h3>
            <p className="text-sm text-[#8b949e]">Scans run automatically on every push via GitHub webhooks, plus a daily background sweep to catch newly discovered license changes in upstream packages.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} LicenseGuard. Built for engineering teams who ship with confidence.
      </footer>
    </main>
  );
}