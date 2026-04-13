"use client";

import Image from "next/image";

const stats = [
  {
    value: "20+",
    text: "years experience in creative direction, design and video production",
  },
  {
    value: "100+",
    text: "marketing funnels planned, designed, produced and delivered",
  },
  {
    value: "750+",
    text: "videos, video ads, AI-motion graphic videos produced",
  },
  {
    value: "6,500+",
    text: "hours in total of educational videos produced",
  },
  {
    value: "12,000+",
    text: "digital products and services delivered",
  },
  {
    value: "$38M+",
    text: "marketing funnel conversions supported",
  },
];

const servicePoints = [
  {
    title: "Problem We Solve",
    point: "People don’t quickly understand your value.",
  },
  {
    title: "What You Get",
    point: "Positioning, messaging, tone of voice, visual identity.",
  },
  {
    title: "How We Support Your Growth",
    point: "Creates clarity with the positioning your product or service on the market, which is the foundation for any kind of conversion.",
  },
];

export default function CreativeAgencySection() {
  return (
    <section className="w-full bg-[#161E23] px-4 py-6 md:px-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[10px] ] p-4 md:p-5">
          {/* HERO */}
          <div className="relative overflow-hidden rounded-[8px]">
            <div className="relative h-[260px] w-full sm:h-[360px] lg:h-[740px]">
              <img
                src="../assets/Image/digital-home.png"
                alt="Creative direction for brands"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute left-5 top-1/2 z-10 max-w-[360px] -translate-y-1/2 md:left-8 md:max-w-[600px]">
                <h1 className="text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[30px] md:text-[38px] lg:text-[42px]">
              Creative Direction for Brands That Need Strategy, Systems, and Scale
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[14px] font-medium text-white backdrop-blur-sm md:px-3.5 md:py-2">
                    Play Showreel
                  </button>
                  <button className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[14px] font-medium text-white backdrop-blur-sm md:px-3.5 md:py-2">
                    Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* STATS + CONTENT */}
          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1fr_1.05fr] md:gap-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:gap-x-8 md:gap-y-8">
              {stats.map((item) => (
                <div key={item.value}>
                  <div className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#7997A8] md:text-[34px]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.45] text-white md:max-w-[186px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[520px] md:pt-1">
              <h2 className="text-[24px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[28px] md:text-[30px]">
                Partner with world-class creative talents, and build your brand that need premium presentation.
              </h2>

              <p className="mt-5 text-[11px] leading-[140%] text-white md:text-[18px]">
           We brand products & services, create digital web experiences, and produce high-end CGI, AI-assisted static and motion visuals, and cinematic ad pieces. 
              </p>

              <p className="mt-5 text-[11px] leading-[140%] text-white md:text-[18px]">
               Our team of experts has 20+ years of design & video production experience across education, consulting, healthcare, and tourism, turning complex business goals into high-performing creative systems that grow long-term value and revenue.
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div className="mt-10 md:mt-36">
            <h3 className="text-[28px] font-semibold tracking-[-0.04em] text-white md:text-[34px]">
              Our Services:
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <button className="rounded-full bg-[#2B495A] px-3 py-1.5 text-[16px] font-medium text-[#fff]">
                Branding &amp; Strategy
              </button>
              <button className="rounded-full border border-[#2B495A] bg-[#161E23] px-3 py-1.5 text-[16px] font-medium text-[#fff]">
                Web &amp; Digital
              </button>
              <button className="rounded-full border border-[#2B495A] bg-[#161E23] px-3 py-1.5 text-[16px] font-medium text-[#fff]">
                Video Production
              </button>
            </div>

            {/* ATTACHED SECTION STYLE */}
            <div className="mt-5 overflow-hidden rounded-[14px] bg-[#0d1d28]">
              <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                {/* LEFT */}
                <div className="bg-[#1B242A] px-6 py-8 md:px-10 md:py-14">
                  <h4 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[40px]">
                    Branding &amp; Strategy
                  </h4>

                  <p className="mt-4 max-w-[420px] text-[15px] leading-[1.7] text-white md:text-[16px]">
                 We brand products and services, create digital web experiences, produce & direct high-end CGI, AI-assisted visuals, and cinematic ad pieces.
                  </p>

                  <div className="mt-8 space-y-5">
                    {servicePoints.map((item) => (
                      <div key={item.title}>
                        <div className="inline-flex rounded-[4px] bg-[#27455b] px-2.5 py-1 text-[10px] font-semibold text-white">
                          {item.title}
                        </div>

                        <div className="mt-2 flex items-start gap-3">
                          <span className="mt-[9px] h-[5px] w-[5px] rounded-full bg-white shrink-0" />
                          <p className="max-w-[430px] text-[16px] leading-[1.55] text-white md:text-[17px]">
                            {item.point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative min-h-[280px] md:min-h-full">
                  <img
                    src="../assets/Image/digital-home1.png"
                    alt="Branding and strategy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}