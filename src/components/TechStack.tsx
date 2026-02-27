import { techstack } from "@/data/techstack";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex justify-end gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-neutral-900" : "text-neutral-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <table className="w-full">
        <tbody>
          {techstack.map((t) => (
            <tr key={t.name} className="border-t border-neutral-200 first:border-t-0">
              <td className="px-5 py-4 text-sm font-medium">{t.name}</td>
              <td className="px-5 py-4">
                <Stars n={t.level} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}