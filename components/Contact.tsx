"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="mt-4 text-slate text-lg">
            Ready to move your freight? Fill out the form below and we&apos;ll get
            back to you quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-ink mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-ink">(603) 555-0123</p>
                    <p className="text-sm text-slate">Mon–Sat, 6AM–8PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-ink">info@northcountryfreight.com</p>
                    <p className="text-sm text-slate">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-ink">New Hampshire</p>
                    <p className="text-sm text-slate">Serving all of New England</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-xl bg-forest p-10 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 mb-4">
                  <Send className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-cream mb-2">
                  Message Sent!
                </h3>
                <p className="text-cream/70">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl bg-white border border-cream-dark p-8 shadow-sm space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-cream-dark bg-cream px-4 py-2.5 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-cream-dark bg-cream px-4 py-2.5 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-cream-dark bg-cream px-4 py-2.5 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
                      placeholder="(603) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-cream-dark bg-cream px-4 py-2.5 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell us about your freight needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-gold px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-gold-light hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
