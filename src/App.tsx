import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Copy,
  Gamepad2,
  Gift,
  Globe,
  LogIn,
  Menu,
  ShieldCheck,
  Smartphone,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useLang } from "./LanguageContext";

const PROMO_CODE = "DNA63";

const REGISTER_URL = `https://melbet-99601.pro/mn/registration?tag=d_4407497m_66335c_&type=phone&bonus=SPORT&currency=MNT&promo=${encodeURIComponent(
  PROMO_CODE
)}`;
const LOGIN_URL = "https://melbet-99601.pro/mn/user/login";

function App() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleLang = () => setLang(lang === "mn" ? "en" : "mn");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
    } catch {
      const el = document.createElement("textarea");
      el.value = PROMO_CODE;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        // ignore
      }
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: Trophy,
      title: t.features.sports,
      description: t.features.sportsDesc,
    },
    {
      icon: Zap,
      title: t.features.liveBetting,
      description: t.features.liveDesc,
    },
    {
      icon: Gamepad2,
      title: t.features.casino,
      description: t.features.casinoDesc,
    },
    {
      icon: Gift,
      title: t.features.promotions,
      description: t.features.promotionsDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b8400e] font-black text-white">
              MB
            </div>
            <span className="text-xl font-black tracking-tight">
              MEL<span className="text-[#e07a1f]">BET</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#sports" className="nav-link">
              {t.nav.sports}
            </a>
            <a href="#live" className="nav-link">
              {t.nav.live}
            </a>
            <a href="#casino" className="nav-link">
              {t.nav.casino}
            </a>
            <a href="#promotions" className="nav-link">
              {t.nav.promotions}
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-bold text-white/70 transition hover:bg-white/5"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {lang === "mn" ? "EN" : "MN"}
            </button>

            <a
              href={LOGIN_URL}
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/5"
            >
              {t.header.login}
            </a>
            <a
              href={REGISTER_URL}
              className="rounded-lg bg-[#b8400e] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#d94e12]"
            >
              {t.header.register}
            </a>
          </div>

          {/* Mobile: lang + menu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-lg border border-white/15 px-2.5 py-1.5 text-xs font-bold text-white/70"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {lang === "mn" ? "EN" : "MN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/10 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0a0a0a] px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-5">
              <a onClick={closeMenu} href="#sports">
                {t.nav.sports}
              </a>
              <a onClick={closeMenu} href="#live">
                {t.nav.live}
              </a>
              <a onClick={closeMenu} href="#casino">
                {t.nav.casino}
              </a>
              <a onClick={closeMenu} href="#promotions">
                {t.nav.promotions}
              </a>

              <a
                onClick={closeMenu}
                href={LOGIN_URL}
                className="rounded-lg border border-white/15 px-5 py-3 text-center font-bold text-white"
              >
                {t.header.login}
              </a>
              <a
                onClick={closeMenu}
                href={REGISTER_URL}
                className="rounded-lg bg-[#b8400e] px-5 py-3 text-center font-bold text-white"
              >
                {t.header.register}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#b8400e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#e07a1f]/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e07a1f]/30 bg-[#e07a1f]/10 px-3 py-1.5 text-xs font-semibold text-[#e07a1f]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e07a1f]" />
                {t.hero.badge}
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                {t.hero.title}
                <span className="text-[#e07a1f]">{t.hero.titleAccent}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                {t.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b8400e] px-6 py-3.5 font-bold text-white transition hover:bg-[#d94e12]"
                >
                  {t.hero.register}
                  <ArrowRight size={18} />
                </a>

                <a
                  href={LOGIN_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-bold transition hover:bg-white/5"
                >
                  <LogIn size={18} />
                  {t.hero.login}
                </a>
              </div>

              <p className="mt-5 text-xs text-white/35">
                {t.hero.responsible}
              </p>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#141414] p-4 shadow-2xl shadow-black/40">
                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/40">
                        {t.liveCard.live}
                      </p>
                      <p className="font-bold">{t.liveCard.football}</p>
                    </div>
                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                      ● {t.liveCard.live}
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#0e0e0e] p-5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Manchester</span>
                      <span className="font-bold">2</span>
                    </div>
                    <div className="my-4 h-px bg-white/10" />
                    <div className="flex items-center justify-between text-sm">
                      <span>United</span>
                      <span className="font-bold">1</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["1", "X", "2"].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg border p-3 text-center ${
                          index === 0
                            ? "border-[#b8400e]/60 bg-[#b8400e]/15 text-[#e07a1f]"
                            : "border-white/10 bg-white/[0.02]"
                        }`}
                      >
                        <p className="text-xs text-white/40">
                          {t.liveCard.odds}
                        </p>
                        <p className="mt-1 font-bold">
                          {index === 0 ? "1.82" : index === 1 ? "3.40" : "4.10"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section
          id="promotions"
          className="border-y border-white/10 bg-[#0f0f0f]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#e07a1f]">
                {t.promotions.label}
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                {t.promotions.title}
              </h2>
              <p className="mt-4 text-white/50">{t.promotions.subtitle}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* Promo code card */}
              <div className="rounded-2xl border border-[#b8400e]/30 bg-[#b8400e]/[0.06] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8400e]/20 text-[#e07a1f]">
                  <Gift size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {t.promotions.codeTitle}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  {t.promotions.codeText}
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-[#e07a1f]/40 bg-black/30 p-4">
                  <span className="font-mono text-xl font-black tracking-[0.2em] text-white">
                    {PROMO_CODE}
                  </span>

                  <button
                    onClick={copyCode}
                    className="ml-auto flex items-center gap-1.5 rounded-lg bg-[#b8400e] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#d94e12] active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check size={14} />
                        {t.promotions.copied}
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        {t.promotions.copy}
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-3 text-xs text-white/40">
                  {t.promotions.useCode}
                </p>
              </div>

              {/* Welcome card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                  <Trophy size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {t.promotions.welcomeTitle}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  {t.promotions.welcomeText}
                </p>

                <a
                  href={REGISTER_URL}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e07a1f]"
                >
                  {t.promotions.registerNow}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO content section */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
            <h2 className="text-3xl font-black">
              MelBet Registration Mongolia
            </h2>

            <p className="mt-6 leading-7 text-white/60">
              To complete your{" "}
              <strong className="text-white">MelBet registration</strong> from
              Mongolia, click the Register button at the top of this page.
              Enter your phone number, select{" "}
              <strong className="text-white">MNT (Mongolian Tugrik)</strong> as
              your preferred currency, and enter the promo code{" "}
              <strong className="text-white">DNA63</strong> in the promo code
              field to claim your welcome bonus.
            </p>

            <p className="mt-4 leading-7 text-white/60">
              MelBet offers sports betting, live betting, casino games and
              promotions for users in Mongolia. Registration takes less than a
              minute and requires only your phone number.
            </p>

            <h3 className="mt-10 text-xl font-bold">
              How to register on MelBet from Mongolia
            </h3>

            <ol className="mt-6 space-y-4 text-white/60">
              <li className="flex gap-4">
                <span className="font-mono font-bold text-[#e07a1f]">01</span>
                <span>
                  Click the <strong className="text-white">Register</strong>{" "}
                  button on this page.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono font-bold text-[#e07a1f]">02</span>
                <span>
                  Enter your phone number and select{" "}
                  <strong className="text-white">MNT</strong> as your currency.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono font-bold text-[#e07a1f]">03</span>
                <span>
                  Enter the promo code{" "}
                  <strong className="text-white">DNA63</strong> to unlock the
                  welcome bonus.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono font-bold text-[#e07a1f]">04</span>
                <span>
                  Complete verification and start betting on sports, live
                  events or casino games.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Features */}
        <section id="sports" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#e07a1f]">
                {t.features.label}
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                {t.features.title}
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-[#b8400e]/40"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8400e]/15 text-[#e07a1f]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 font-bold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Responsible gaming */}
        <section id="casino" className="border-y border-white/10 bg-[#0f0f0f]">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b8400e]/15 text-[#e07a1f]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {t.responsible.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/50">
                    {t.responsible.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mx-auto max-w-3xl px-5 py-16">
            <div className="mb-8 text-center">
              <CircleHelp className="mx-auto text-[#e07a1f]" size={28} />
              <h2 className="mt-3 text-3xl font-black">{t.faq.title}</h2>
            </div>

            <details className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {t.faq.loginQ}
                <ChevronDown
                  className="transition group-open:rotate-180"
                  size={18}
                />
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/45">
                {t.faq.loginA}
              </p>
            </details>

            <details className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {t.faq.promoQ}
                <ChevronDown
                  className="transition group-open:rotate-180"
                  size={18}
                />
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/45">
                {t.faq.promoA}
              </p>
            </details>

            <details className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {t.faq.liveQ}
                <ChevronDown
                  className="transition group-open:rotate-180"
                  size={18}
                />
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/45">
                {t.faq.liveA}
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#b8400e] text-xs font-black text-white">
                  MB
                </div>
                <span className="font-black">
                  MEL<span className="text-[#e07a1f]">BET</span>
                </span>
              </div>
              <p className="mt-3 text-xs text-white/30">
                {t.footer.responsibleNote}
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-xs text-white/40">
              <a href="#home" className="hover:text-white">
                {t.footer.home}
              </a>
              <a href="#promotions" className="hover:text-white">
                {t.footer.promotions}
              </a>
              <a href="#casino" className="hover:text-white">
                {t.footer.responsible}
              </a>
              <a href="#" className="hover:text-white">
                {t.footer.terms}
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6 text-xs text-white/20">
            © {new Date().getFullYear()} MelBet. {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Floating mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <a
          href={REGISTER_URL}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#b8400e] px-5 py-3.5 font-bold text-white shadow-xl shadow-black/50 transition hover:bg-[#d94e12]"
        >
          <Smartphone size={18} />
          {t.mobileCta}
        </a>
      </div>
    </div>
  );
}

export default App;
