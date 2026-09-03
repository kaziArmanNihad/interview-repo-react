export default function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Main footer */}
        <div className="grid gap-12 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              My<span className="text-cyan-300">Logo</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              We create beautiful digital experiences for ambitious brands and
              forward-thinking teams.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  text-sm text-white/50
                  backdrop-blur-xl
                  transition
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                X
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  text-sm text-white/50
                  backdrop-blur-xl
                  transition
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                GH
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  text-sm text-white/50
                  backdrop-blur-xl
                  transition
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                in
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="
                        text-sm text-white/40
                        transition-colors
                        hover:text-white
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="
            mb-12
            flex flex-col gap-6
            rounded-2xl
            border border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <h3 className="font-semibold">Stay in the loop</h3>

            <p className="mt-1 text-sm text-white/40">
              Get occasional updates, tips, and inspiration.
            </p>
          </div>

          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                min-w-0 flex-1
                rounded-xl
                border border-white/10
                bg-white/5
                px-4 py-3
                text-sm text-white
                outline-none
                placeholder:text-white/30
                focus:border-cyan-400/50
                focus:bg-white/10
              "
            />

            <button
              type="submit"
              className="
                rounded-xl
                bg-white
                px-5 py-3
                text-sm font-semibold
                text-slate-950
                transition
                hover:bg-cyan-100
              "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col gap-4
            border-t border-white/10
            py-8
            text-sm
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-white/30">
            © {new Date().getFullYear()} MyLogo. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-white/30 transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="text-white/30 transition hover:text-white">
              Terms
            </a>

            <a href="#" className="text-white/30 transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
