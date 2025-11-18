'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function DesignSystemNewsletterPage() {
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
              Design System Newsletter
            </h1>
            <p className="text-2xl leading-[1.2em] text-[#EAEAEA] font-normal">
              Keeping Everyone in the Loop
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* Introduction */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-medium">
              Keeping all teams (design, development, product, business) aligned is crucial, but it's not always easy. Even with a public backlog and the ability for anyone to create a ticket, we still faced situations where the business team would make requests that didn't align with our design guidelines. For example, they would ask for a primary button to be placed in the top-left corner or request reducing margins, even though we had already established those design elements.
            </p>
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-medium">
              To address this, we introduced a Design System newsletter, shared at the end of each sprint during our demo meetings. The goal wasn't just to announce updates; it was to inform everyone across the company about what was changing, such as new features like light mode or layout updates, so that teams (especially the business team) could stay aligned with the new direction. This helped prevent requests that conflicted with our established design patterns.
            </p>
          </div>

          {/* Why This Was Needed */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Why This Was Needed:
            </h2>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-4 text-base leading-[1.75em] text-[#EAEAEA] font-normal">
              <li>
                <strong>Preventing Misaligned Requests:</strong> With many new features rolling out, we needed to ensure that everyone, including the business team, was aware of these updates. This way, we could avoid requests that contradicted the design system.
              </li>
              <li>
                <strong>Managing Expectations:</strong> By keeping everyone informed about what was being developed, we could manage expectations more effectively. Teams had a better understanding of what was coming and could plan accordingly, without making requests that would add unnecessary complexity.
              </li>
              <li>
                <strong>Getting Teams Involved:</strong> The newsletter also made it clear that anyone could be involved in the design process. If they had questions or suggestions, they could join the Design System meeting where features in development were discussed before release.
              </li>
            </ul>
          </div>

          {/* What It Solved */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              What It Solved
            </h2>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-4 text-base leading-[1.75em] text-[#EAEAEA] font-normal">
              <li>
                <strong>Clear Communication:</strong> Everyone across the company, from business to design, knew exactly what updates were being made, reducing the chances of misaligned requests or confusion about what was possible.
              </li>
              <li>
                <strong>Alignment Across Teams:</strong> With regular updates, teams were better aligned with the design direction, which meant fewer last-minute requests that conflicted with the established system.
              </li>
              <li>
                <strong>Better Planning:</strong> By setting expectations through the newsletter, we ensured that the business and product teams knew what to expect in the coming sprints, leading to more efficient project planning.
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Challenges
            </h2>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-4 text-base leading-[1.75em] text-[#EAEAEA] font-normal">
              <li>
                <strong>Making It Accessible:</strong> While the design system details were important for some teams, we needed to ensure that the content was accessible to everyone, even those who weren't directly working with the design system.
              </li>
              <li>
                <strong>Keeping It Engaging:</strong> It was important to present the updates in a way that kept people interested, so they'd stay informed without getting overwhelmed by technical details.
              </li>
              <li>
                <strong>Regular Updates:</strong> Keeping the newsletter consistent with the latest changes and ensuring it was always up-to-date after each sprint was crucial to maintaining its effectiveness.
              </li>
            </ul>
          </div>

          {/* Why It Worked */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Why It Worked
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-medium">
                The newsletter helped create transparency and alignment. It gave everyone in the company a clearer view of what was happening with the design system, which led to fewer misaligned requests and better collaboration. It also encouraged involvement, so teams felt more connected to the design process, knowing they could participate in meetings where new developments were discussed before being released.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-medium">
                If your team struggles with managing expectations and alignment, a newsletter like this can be a great way to keep everyone informed and ensure the design system stays consistent across all teams.
              </p>
            </div>
          </div>

          {/* Newsletter Example */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Newsletter Example
            </h2>
            <div className="w-full">
              <ImageLightbox
                src="/images/design-system-newsletter/image-528-newsletter-full.png"
                alt="Design System Newsletter examples"
                width={1105}
                height={4096}
                className="w-auto h-auto max-w-full"
              />
            </div>
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

