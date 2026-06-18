import { Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative rounded-xl overflow-hidden bg-forest aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <Shield className="h-16 w-16 text-gold mx-auto mb-4" />
              <p className="text-cream/60 text-sm font-medium">Company Photo</p>
            </div>
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-gold rounded-tr-xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl mb-6">
              About <span className="text-gold">North Country Freight</span>
            </h2>
            <div className="space-y-4 text-slate leading-relaxed text-lg">
              <p>
                North Country Freight LLC is a non-CDL hotshot freight and hauling
                company proudly based in the heart of New Hampshire. We were founded
                on a simple principle: businesses deserve a freight partner that
                shows up on time, communicates clearly, and gets the job done right.
              </p>
              <p>
                Whether it&apos;s a same-day delivery across the state or a regional haul
                throughout New England, our team brings the hustle and professionalism
                that larger carriers often lack. We&apos;re big enough to handle the load,
                small enough to care about every shipment.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gold/30" />
              <span className="text-sm font-semibold text-gold uppercase tracking-wide">
                New Hampshire Proud
              </span>
              <div className="h-px flex-1 bg-gold/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
