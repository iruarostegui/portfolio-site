import { CustomLink } from "./Link"

interface ExperienceItemProps {
  company: string
  period: string
  href?: string
}

export function ExperienceItem({ company, period, href }: ExperienceItemProps) {
  const CompanyComponent = href ? (
    <CustomLink href={href} className="text-base leading-[1.6em] relative inline-block" external>
      {company}
    </CustomLink>
  ) : (
    <span className="text-base leading-[1.6em] text-[#EAEAEA] font-normal">
      {company}
    </span>
  )

  return (
    <div className="flex flex-row items-center w-full gap-3">
      {CompanyComponent}
      <div className="flex-1 h-px bg-[#292929]" />
      <span className="text-sm leading-[1.4285714285714286em] text-[#EAEAEA] font-mono uppercase font-thin">
        {period}
      </span>
    </div>
  )
}

