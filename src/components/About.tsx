import { about } from "@/data/about";

export default function About() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* Profile photo */}
      <div className="md:col-span-1">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <div className="aspect-auto w-full">
            <img
              src="/images/me.jpeg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="md:col-span-2">
        <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
          {about.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-neutral-200 p-5">
          <dl className="space-y-4">
            {about.highlights.map((h) => (
              <div key={h.k} className="grid grid-cols-3 gap-3">
                <dt className="text-xs font-semibold text-neutral-500">{h.k}</dt>
                <dd className="col-span-2 text-sm text-neutral-800">{h.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Contact
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-50"
              href="https://github.com/dev-LeoKang"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.06 1.03-2.78-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.06A9.2 9.2 0 0 1 12 6.32c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.06 2.74-1.06.56 1.4.21 2.44.1 2.7.64.72 1.03 1.65 1.03 2.78 0 3.96-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sky-700 shadow-sm transition hover:bg-sky-50"
              href="https://www.linkedin.com/in/leoKang-85511122b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 23.5h4.36V7.98H.32V23.5zM8.34 7.98h4.18v2.12h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.68v8h-4.36v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78v7.22H8.34V7.98z" />
              </svg>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-pink-600 shadow-sm transition hover:bg-pink-50"
              href="https://www.instagram.com/h9._.k/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 2.5A5.5 5.5 0 0 0 6.5 12 5.5 5.5 0 0 0 12 17.5 5.5 5.5 0 0 0 17.5 12 5.5 5.5 0 0 0 12 6.5zm0 2A3.5 3.5 0 0 1 15.5 12 3.5 3.5 0 0 1 12 15.5 3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm5.25-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}