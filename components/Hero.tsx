import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-forest pt-20 md:pt-0 min-h-[600px] md:min-h-[700px] flex items-center"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-wide text-gold uppercase">
              New Hampshire&apos;s Trusted Freight Partner
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Fast, Reliable{" "}
            <span className="text-gold">Hotshot Freight</span>{" "}
            When It Matters Most
          </h1>

          <p className="mt-6 max-w-xl text-lg text-cream/70 sm:text-xl">
            Non-CDL hotshot delivery and hauling services across New England.
            We move your freight on your timeline — no delays, no excuses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cream/20 px-8 py-3.5 text-base font-semibold text-cream transition-all hover:bg-white/5 hover:border-cream/40"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-[40px] md:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>
    </section>
  );
}
