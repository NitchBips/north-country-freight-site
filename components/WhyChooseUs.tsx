import { Timer, ShieldCheck, MapPinned, Award } from "lucide-react";

const reasons = [
  {
    icon: Timer,
    title: "Fast",
    description:
      "Same-day and next-day dispatch available. We move when you need us to.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description:
      "On-time delivery you can count on. Your freight is in dependable hands.",
  },
  {
    icon: MapPinned,
    title: "Local",
    description:
      "Based in New Hampshire with deep knowledge of New England routes and roads.",
  },
  {
    icon: Award,
    title: "Professional",
    description:
      "Clear communication, proper handling, and accountability on every job.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Why Choose <span className="text-gold">Us</span>
          </h2>
          <p className="mt-4 text-cream/60 text-lg">
            We earn your trust on every run.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group text-center p-8 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-gold/30"
            >
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-white group-hover:scale-110">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-cream mb-2">
                {reason.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
