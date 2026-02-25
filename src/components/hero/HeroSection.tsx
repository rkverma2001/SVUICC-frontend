import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-sky-50" />
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-14 lg:flex-row lg:py-20">
            {/* Left content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                World-class certifications &amp; training
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                <span className="block text-emerald-600">Future-Ready</span>
                <span className="block">Tech Skills.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                At Sri Venkateswara University, we believe education goes beyond classrooms. <br/>
The Industry Certification Centre, established under the <span className="font-semibold">Start-Up Innovation & Incubation Centre – RUSA Phase II</span>, is dedicated to equipping students with industry-relevant skills, practical exposure, and globally recognized certifications.

              </p>
            </div>

            {/* Right content */}
            <div className="flex flex-1 justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-200 via-sky-200 to-transparent opacity-70 blur-2xl" />
                <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">
                  <img src="https://etrain.blr1.cdn.digitaloceanspaces.com/imageheader.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default HeroSection;
