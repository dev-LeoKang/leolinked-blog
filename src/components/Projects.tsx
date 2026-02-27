import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          className="group rounded-xl border border-neutral-200 p-5 hover:border-neutral-300 hover:bg-neutral-50"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold group-hover:underline">
              {p.name}
            </h3>
            <span className="text-xs text-neutral-400">↗</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            {p.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}