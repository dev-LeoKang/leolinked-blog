const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech" }
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-200 bg-black/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
          Portfolio
        </a>

        <nav className="flex gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white hover:text-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}