import { Truck, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gold divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-gold" />
              <span className="font-heading text-lg font-bold text-cream">
                North Country Freight LLC
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Non-CDL hotshot freight and hauling services based in New Hampshire.
              Serving New England with speed and reliability.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-cream uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-cream uppercase tracking-wide mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span>(603) 555-0123</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <span>info@northcountryfreight.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} North Country Freight LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
