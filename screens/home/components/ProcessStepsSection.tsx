import Image from "next/image";
import type { ProcessStep } from "../types";

type ProcessStepsSectionProps = {
  steps: ProcessStep[];
};

const ProcessStepsSection = ({ steps }: ProcessStepsSectionProps) => (
  <section className="grid gap-6 md:grid-cols-3">
    {steps.map((step) => (
      <article
        key={step.title}
        className="rounded-3xl border border-[#ffe0c9] bg-white p-6 shadow-[0_20px_40px_rgba(255,192,158,0.25)]"
      >
        <div
          className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${step.accent}`}
        >
          <Image src={step.icon} alt={step.title} width={28} height={28} />
        </div>
        <h3 className="text-lg font-semibold text-[#472515]">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#7b4b3b]">
          {step.description}
        </p>
      </article>
    ))}
  </section>
);

export default ProcessStepsSection;
