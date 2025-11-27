import type { ServiceHighlight } from "../types";

type ServicePackagesSectionProps = {
  services: ServiceHighlight[];
};

const ServicePackagesSection = ({ services }: ServicePackagesSectionProps) => (
  <section className="rounded-[28px] border border-dashed border-[#ffb686] bg-white px-6 py-10 sm:px-10">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff5a15]">
          แพ็กเกจแนะนำ
        </p>
        <h2 className="text-3xl font-bold text-[#402115]">
          เลือกแพ็กเกจที่เหมาะกับเป้าหมายการเดินทางของคุณ
        </h2>
        <p className="text-base text-[#6a4536]">
          ทุกแพ็กเกจรวมบริการเตรียมเอกสาร ตรวจเอกสาร
          นัดหมายยื่นคำร้องและอัปเดตสถานะอัตโนมัติ
        </p>
      </div>
      <div className="grid w-full flex-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-[#ffe0c7] bg-[#fff6f0] p-6"
          >
            <span className="inline-flex rounded-full bg-[#ffede0] px-3 py-1 text-xs font-semibold text-[#c1491f]">
              {service.badge}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-[#44271a]">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-[#6d4636]">{service.detail}</p>
            <ul className="mt-4 space-y-2 text-sm text-[#47291b]">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff6a2e]" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePackagesSection;

