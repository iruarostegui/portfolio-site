'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function BuildingSolidFoundationPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const auth = sessionStorage.getItem('portfolio_auth')
    if (auth !== 'true') {
      router.push('/work')
      return
    }
    setIsAuthenticated(true)
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <main className="min-h-screen bg-[#101010]">
      <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[664px] pt-20 max-w-[2176px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full">
          <CustomLink href="/work" className="text-sm text-[#777777] w-fit">
            ← Back to portfolio
          </CustomLink>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-[40px] leading-[1.2em] tracking-[-0.025em] font-medium text-[#EAEAEA]">
              Building a Solid Foundation for Design Work in Figma
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* Introduction */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                When I first started in my current role, I inherited a solid team of 5 designers, each with different levels of experience, ranging from junior to senior. One of the biggest challenges I faced was getting everyone on the same page when it came to how we worked, particularly with Figma. Each designer was using it in their own way, which made it near impossible to track the latest designs or even locate files. We had inconsistencies with thumbnails (or sometimes no thumbnails at all), making navigation a bit of a nightmare. Naming conventions were nonexistent, and within files, organization was totally up to the individual designer.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                On top of that, some of the junior designers weren't even familiar with some Figma tools like auto-layout or swapper features, which left us wasting time just figuring out how to work efficiently.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                So, I decided to step in and create something simple but essential: a "Welcome" file. This file is now a standard for anyone joining the team. It provides clear guidelines on how to organize files, maintain consistency with naming conventions, and fully leverage the tools Figma offers. Think of it as a one-stop reference to help every designer get on track and stay aligned with our processes.
              </p>
            </div>
          </div>

          {/* Link to Figma file */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
              Want a peek at what I put together for the team? Here's{' '}
              <CustomLink 
                href="https://www.figma.com/design/PO9ekXfFaBGtblX3UdMf6n/Arostegui-Iru?node-id=2001-86135" 
                className="text-[#EAEAEA]" 
                external
              >
                the link to the file
              </CustomLink>{' '}
              (password's the same as the one for my portfolio). Feel free to check it out!
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top */}
        <ScrollToTop />
      </div>
    </main>
  )
}

