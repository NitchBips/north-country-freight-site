import { MapPin, Navigation } from "lucide-react";

const states = [
  { name: "New Hampshire", highlight: true },
  { name: "Massachusetts", highlight: false },
  { name: "Vermont", highlight: false },
  { name: "Maine", highlight: false },
  { name: "Connecticut", highlight: false },
  { name: "Rhode Island", highlight: false },
];

export default function CoverageArea() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-cream-dark shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Content side */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl mb-4">
                Coverage <span className="text-gold">Area</span>
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Based in New Hampshire, North Country Freight proudly serves the
                entire New England region. Whether your load needs to move across
                town or across state lines, we&apos;ve got the routes covered.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {states.map((state) => (
                  <div key={state.name} className="flex items-center gap-2">
                    <MapPin className={`h-4 w-4 shrink-0 ${state.highlight ? "text-gold" : "text-forest"}`} />
                    <span className={`font-medium ${state.highlight ? "text-gold" : "text-ink"}`}>
                      {state.name}
                      {state.highlight && (
                        <span className="text-xs text-slate ml-1">(HQ)</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate">
                Extended coverage available — contact us for routes beyond New England.
              </p>
            </div>

            {/* Styled map visual */}
            <div className="bg-forest relative flex items-center justify-center p-10 md:p-14 min-h-[300px] overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 border border-gold/30">
                  <Navigation className="h-10 w-10 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-cream">New England Region</p>
                  <p className="text-cream/50 text-sm mt-1">6 states covered</p>
                </div>

                {/* Route lines visual */}
                <div className="flex items-center justify-center gap-3 flex-wrap max-w-xs mx-auto">
                  {["NH", "MA", "VT", "ME", "CT", "RI"].map((abbr, i) => (
                    <div key={abbr} className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                          abbr === "NH"
                            ? "bg-gold text-white"
                            : "bg-white/10 text-cream/80 border border-white/10"
                        }`}
                      >
                        {abbr}
                      </span>
                      {i < 5 && (
                        <div className="w-4 h-px bg-gold/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
