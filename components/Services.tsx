import { Zap, MapPin, Clock } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Hotshot Delivery",
    description:
      "Dedicated non-CDL hotshot delivery for time-critical loads. We dispatch fast and deliver faster — direct routes, no middlemen, no terminal delays.",
  },
  {
    icon: MapPin,
    title: "Regional Freight",
    description:
      "Dependable freight hauling across New Hampshire, New England, and the Northeast. From palletized goods to oversized equipment, we handle it all.",
  },
  {
    icon: Clock,
    title: "Time-Sensitive Loads",
    description:
      "When a deadline can't be missed, count on us. Same-day and next-day service available for urgent shipments that need to arrive on time, every time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            What We <span className="text-gold">Deliver</span>
          </h2>
          <p className="mt-4 text-slate text-lg">
            Professional freight solutions built for speed and reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl bg-white p-8 shadow-sm border border-cream-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-forest text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-slate leading-relaxed">
                {service.description}
              </p>
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gold scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
