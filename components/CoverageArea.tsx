import { MapPin } from "lucide-react";

const states = [
  "New Hampshire",
  "Massachusetts",
  "Vermont",
  "Maine",
  "Connecticut",
  "Rhode Island",
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
                  <div key={state} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-ink font-medium">{state}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate">
                Extended coverage available — contact us for routes beyond New England.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="bg-forest/5 flex items-center justify-center p-10 md:p-14 min-h-[300px]">
              <div className="text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 mb-4">
                  <MapPin className="h-10 w-10 text-forest" />
                </div>
                <p className="text-slate font-medium">Service Area Map</p>
                <p className="text-sm text-slate/60 mt-1">New England Region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
