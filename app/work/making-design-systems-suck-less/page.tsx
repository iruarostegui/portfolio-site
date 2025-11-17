'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function MakingDesignSystemsPage() {
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
              Making Design Systems Suck Less
            </h1>
            <p className="text-2xl leading-[1.2em] text-[#EAEAEA] font-normal">
              Cleaning Up the Mess So Designers and Devs Can Breathe Again
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* The Initial Chaos Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              The Initial Chaos, A System in Name Only
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.5em] text-[#777777] font-normal">
                A design system should create order, not chaos. But when I joined Membrane, the Figma library was a bloated mess, 230+ components, no real system, and zero alignment with development. Designers detached components at will, forcing the frontend team to rebuild UI from scratch. It wasn't a system, it was a free-for-all. We needed a reset.
              </p>
              <p className="text-base leading-[1.5em] text-[#777777] font-normal">
                The issues ran deep. Here are some of the biggest ones I quickly found, followed by how I tackled them:
              </p>
            </div>
          </div>

          {/* Low Designer Adoption Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Low Designer Adoption
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The problem: Data showed that designers frequently detached components and modified them instead of using the system as intended, worsening inconsistencies.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/making-design-systems/image-1.svg"
                  alt="Design system adoption data"
                  width={879}
                  height={295}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The fix: I led Figma training sessions to ensure designers fully adopted the system, reinforcing best practices to prevent detachment and misuse.
              </p>
              <div className="flex flex-col gap-4 w-full mt-4">
                <ImageLightbox
                  src="/images/making-design-systems/image-2.svg"
                  alt="Figma training results"
                  width={879}
                  height={296}
                  className="w-auto h-auto max-w-full"
                />
                <ImageLightbox
                  src="/images/making-design-systems/image-3.svg"
                  alt="Design system improvements"
                  width={879}
                  height={296}
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Unstable Design Decisions Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Unstable Design Decisions
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The problem: Frequent, unpredictable changes—even to core elements like the primary button color—left the frontend team unable to maintain stable, reusable components, forcing them to reinvent the wheel for every task.
              </p>
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The fix: I established a cross-functional review process to lock in core design decisions, document changes, and stop arbitrary updates before they caused chaos.
              </p>
            </div>
          </div>

          {/* Undefined & Inconsistent Foundations Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Undefined & Inconsistent Foundations
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The problem: Core design tokens—colors, typography, and spacing—were in constant flux. Colors changed at random, typography lacked a structured hierarchy, and spacing was an afterthought. Without a foundation, everything felt improvised, making scalability impossible.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/making-design-systems/image-44.png"
                  alt="Design token system"
                  width={424}
                  height={410}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The fix: I built a scalable design token system that locked down colors, defined clear typography styles, and introduced structured spacing rules. With a single source of truth, designers stopped guessing, devs stopped rewriting styles, and the entire team moved faster. (For a deeper dive, check out my Medium post: <CustomLink href="https://medium.com/@iruNotFound/scalable-color-systems-0fb1eb66c1ca" className="text-[#EAEAEA]" external>Color Mastery, A Guide to Scalable Color Systems</CustomLink>)
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/making-design-systems/image-518.png"
                  alt="Design token system details"
                  width={268}
                  height={697}
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Scattered & Unmanageable Assets Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Scattered & Unmanageable Assets
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The problem: All icons lived within a single component with countless variants, making selection tedious and inefficient. This issue extended beyond icons—logos and illustrations were also scattered and difficult to manage.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/making-design-systems/image-519-17ccc0.png"
                  alt="Scattered assets example"
                  width={487}
                  height={200}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The fix: I created a centralized assets library for icons, logos, and illustrations, ensuring they were structured, easy to find, and simple to maintain. By treating assets as reusable elements rather than scattered components, we streamlined selection and improved system-wide consistency.
              </p>
            </div>
          </div>

          {/* Overcomplicated Components Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Overcomplicated Components
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The problem: Component overengineering was everywhere. The card component alone had 26 variants, but it was just one example. Many components were bloated with unnecessary variations that could have been simplified using properties and structured configurations.
              </p>
              <div className="w-full my-4 overflow-x-auto">
                <ImageLightbox
                  src="/images/making-design-systems/overcomplicated-components.svg"
                  alt="Overcomplicated components comparison"
                  width={1440}
                  height={129}
                  className="w-full h-auto max-w-full"
                />
              </div>
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The fix: I consolidated redundant components using Figma properties, boolean controls, and strings, reducing complexity while maintaining flexibility.
              </p>
            </div>
          </div>

          {/* Poor Component Structure Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Poor Component Structure
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The problem: Poor component structure was widespread. Backgrounds were just plain rectangles instead of properly layered elements, but that was just one example. Many components lacked proper hierarchy, constraints, or nesting, making them difficult to maintain and scale.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/making-design-systems/image-518-poor-structure.png"
                  alt="Poor component structure example"
                  width={274}
                  height={175}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <p className="text-base leading-[1.5em] text-[#EAEAEA] font-normal">
                The fix: I rebuilt components with structured backgrounds, proper layering, and defined constraints to prevent misuse.
              </p>
            </div>
          </div>

          {/* Beyond the Fixes: Establishing Stability Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Beyond the Fixes: Establishing Stability
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Fixing the chaos was just step one. But without a solid foundation, it would only be a matter of time before things fell apart again. We didn't just need a cleanup—we needed a system that could scale and sustain itself. Through weekly cross-functional syncs, structured documentation, and hands-on Figma workshops, we built a foundation that could scale.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                As the design system evolved, so did my role—I shifted focus from cleanup to long-term scalability and governance. The impact?
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                A massive reduction in inconsistencies across the design-to-dev workflow.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Improved collaboration between design and engineering.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Faster iteration cycles—cutting redundant component requests by 40%, allowing teams to ship UI updates faster.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Previously, button styles varied across different components, leading to a scattered UI and increased dev handoff friction. Now, a single, well-defined button component ensures consistency, eliminates unnecessary variations, and reduces the cognitive load for both designers and engineers.
              </p>
            </div>
          </div>

          {/* Scaling with the Team: Driving Adoption & Collaboration Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Scaling with the Team: Driving Adoption & Collaboration
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Scaling a design system isn't about rules, it's about removing friction and empowering teams. I had to prove that structure wasn't a restriction, it was a launchpad. With the right guardrails, teams moved faster, collaborated better, and built with confidence. Once they saw how governance accelerated work instead of slowing it down, the skeptics became advocates.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                One of my key strategies was to balance flexibility with structure—too much rigidity kills innovation, but too much freedom leads to chaos. We set up:
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Governance models that define how components are added and maintained.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Contribution guidelines so designers and engineers could iterate efficiently.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Structured feedback loops to make the system adaptable while maintaining control.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                These ensured that our design system wasn't just a static library, but a living, evolving tool that empowered teams.
              </p>
            </div>
          </div>

          {/* Evolving the System: What's Next? Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Evolving the System: What's Next?
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Material UI got us far, but now it's holding us back. The next step isn't just about replacing a framework—it's about building a design system that's lighter, faster, and built for scale. Enzyme DS is our next move: a system that's smaller, more maintainable, and truly optimized for both designers and developers. We're exploring utility-first approaches like Tailwind to move faster without losing precision. But making that kind of shift requires strategic stakeholder alignment and clear transition planning.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                The real challenge isn't just building a design system—it's making sure it stays adaptable, scalable, and always ahead of the curve. A great system isn't static; it evolves with the team. We're always refining, learning, and making it better. Been through a similar shift? Let's swap stories—I'm always up for a good design system war story.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  )
}

