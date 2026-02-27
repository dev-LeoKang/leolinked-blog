import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-neutral-200">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/background.jpg)" }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" aria-hidden="true" />

      <div className="relative">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <p className="text-sm text-neutral-600">{profile.englishName}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-800">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-medium hover:bg-white"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}