import { ReactNode } from "react"

interface SectionProps {
  number: string
  title?: string | ReactNode
  children: ReactNode
  titleAction?: ReactNode
}

export function Section({ number, title, children, titleAction }: SectionProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center w-full gap-2">
        <span className="text-sm leading-[1.4285714285714286em] text-[#777777] font-normal">
          {number}
        </span>
        {title && (
          <span className="text-sm leading-[1.4285714285714286em] text-[#EAEAEA] font-normal">
            {title}
          </span>
        )}
        {titleAction}
      </div>
      {children}
    </div>
  )
}

