const testimonials = [
  {
    quote:
      "They completely transformed how we present our brand online. The result feels premium, fast, and incredibly easy to use.",
    name: "Alex Morgan",
    role: "Founder, Vertex",
  },
  {
    quote:
      "The attention to detail was incredible. We launched faster than expected and immediately started seeing better engagement.",
    name: "Sarah Chen",
    role: "Product Lead, Orbit",
  },
  {
    quote:
      "Exactly the kind of creative and technical partner we needed. The final product exceeded our expectations.",
    name: "Daniel Ross",
    role: "CEO, Northstar",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Loved by ambitious teams.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
              "
            >
              <div className="text-2xl text-cyan-300">“</div>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {testimonial.quote}
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-white/30">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
