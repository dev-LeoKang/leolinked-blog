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
      </div>
    </div>
  );
}