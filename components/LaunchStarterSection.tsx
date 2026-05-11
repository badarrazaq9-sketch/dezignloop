'use client';

import { CheckCircle2 } from 'lucide-react';

const LEFT_FEATURES = [
  "2 Logo Concepts",
  "48hr Delivery",
  "Brand Identity Kit",
  "100% Ownership",
  "Social Media Kit",
  "UI Style Guide",
];

const RIGHT_FEATURES = [
  "High-Performance Landing Page",
  "Full Source File Access",
  "SEO & Speed Optimization",
  "Mobile Responsive",
];

export default function LaunchStarterSection() {
  return (
    <section className="relative py-28 bg-slate-900 dark:bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block">
              Limited Availability
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] mb-6">
              Launch Starter <br /> Package
            </h2>

            <p className="text-slate-400 text-lg max-w-xl mb-12">
              Everything you need to kickstart your digital presence in record time without compromising on Silicon Valley quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LEFT_FEATURES.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={22} className="text-primary flex-shrink-0" />
                  <span className="font-bold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:w-1/2 w-full max-w-lg">
            <div className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-[3rem] p-10 md:p-12 shadow-2xl">

              <div className="absolute top-0 right-12 -translate-y-1/2 bg-gradient-to-r from-primary to-[#010FFF] text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest">
                Most Popular
              </div>

              <h3 className="text-3xl font-black mb-6">
                Starter Launch
              </h3>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black tracking-tighter">
                  $1,499
                </span>
                <span className="text-slate-400 font-bold text-lg">
                  / one-time
                </span>
              </div>

              <ul className="space-y-5 mb-12">
                {RIGHT_FEATURES.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-base font-bold text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 size={18} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById("booking-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xl hover:shadow-xl transition"
              >
                Claim This Package
              </button>

              <p className="text-center text-xs font-bold text-slate-400 mt-8 uppercase tracking-widest">
                No hidden fees • Cancel anytime
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
