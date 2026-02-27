// src/components/Section.tsx
import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SectionA({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionB({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16 bg-neutral-50">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}