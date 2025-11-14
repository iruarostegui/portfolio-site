import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CustomLinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export function CustomLink({ href, children, className, external = false }: CustomLinkProps) {
  const baseClasses = "text-[#EAEAEA] font-normal transition-colors duration-200 hover:text-[#EAEAEA]/80 relative inline-block group w-fit"
  
  const linkContent = (
    <>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#EAEAEA] transition-all duration-300 ease-in-out group-hover:w-full" />
    </>
  )
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, className)}
      >
        {linkContent}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cn(baseClasses, className)}
      style={{ display: 'inline-block' }}
    >
      {linkContent}
    </Link>
  )
}

