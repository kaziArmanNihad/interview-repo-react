export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Grid background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
        "
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32">
        <div className="w-full text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/5
                px-4 py-2
                text-sm text-white/70
                shadow-lg shadow-black/10
                backdrop-blur-xl
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <span>Building the future of digital experiences</span>

              <span className="text-white/40">→</span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
              mx-auto max-w-5xl
              text-5xl font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-4xl
              lg:text-5xl
            "
          >
            Create something
            <br />
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              extraordinary.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto mt-8
              max-w-2xl
              text-base
              leading-7
              text-white/50
              sm:text-lg
              lg:text-base
            "
          >
            We design and build beautiful digital experiences that help
            ambitious brands stand out, connect with their audience, and grow
            faster.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary */}
            <a
              href="#projects"
              className="
                group
                inline-flex items-center gap-2
                rounded-xl
                bg-white
                px-6 py-3.5
                text-sm font-semibold
                text-slate-950
                shadow-xl shadow-white/10
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-white/20
              "
            >
              Explore our work
              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Secondary */}
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-white/10
                bg-white/5
                px-6 py-3.5
                text-sm font-semibold
                text-white
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:border-white/20
              "
            >
              Let's talk
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/30">
              Trusted by innovative teams
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/30">
              <span>Acme</span>
              <span>Vertex</span>
              <span>Orbit</span>
              <span>Northstar</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
