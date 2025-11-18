'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function MeasuringDesignWorkPage() {
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
              Measuring Design Work
            </h1>
            <p className="text-2xl leading-[1.2em] text-[#EAEAEA] font-normal">
              Quantitative, Qualitative, and How I Act on It
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* Introduction */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-medium">
              Tracking the progress of design work isn't just about "how long did it take?" or "is it done yet?" It's about measuring both the quantitative and qualitative aspects to ensure work flows efficiently, meets expectations, and fosters growth.
            </p>
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-medium">
              Here's how I approach it at Membrane.
            </p>
          </div>

          {/* Quantitative Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Quantitative: Time Tracking, Workflow, and Efficiency
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                The quantitative side of measuring design work is about tracking performance in concrete terms: time spent, tickets resolved, and identifying inefficiencies in the workflow. I focus on several key metrics that help me understand both the productivity of individual designers and the overall health of the process.
              </p>

              {/* Time Tracking and Task Breakdown */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Time Tracking and Task Breakdown
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Using Jira, I measure how much time is spent on each task. This includes every stage of the design process, from initial definition to final sign-off.
                </p>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/measuring-design-work/image-522-workflow.png"
                    alt="Design process workflow stages"
                    width={769}
                    height={38}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  At each stage, we track how long each task stays within that phase. This gives us an understanding of where the bottlenecks might be happening.
                </p>
              </div>

              {/* Ticket Resolution and Efficiency */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Ticket Resolution and Efficiency
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  After every sprint, I pull data from Jira to see how many tickets each designer has resolved. This tells us the volume of work being completed and helps us see productivity over time.
                </p>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/measuring-design-work/image-524-ticket-resolution.png"
                    alt="Ticket resolution and efficiency metrics"
                    width={539}
                    height={300}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
                <ul className="list-disc list-inside pl-4 flex flex-col gap-2 text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  <li>How many tickets are resolved per designer</li>
                  <li>The time it took to resolve each ticket, broken down by phase</li>
                  <li>The complexity of each task, assigned at the definition stage (this helps us compare time spent with complexity to ensure realistic results)</li>
                </ul>
              </div>

              {/* Tickets Returning to Ready to Design */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Tickets Returning to "Ready to Design"
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  One key metric we track is how many tickets are sent back to the "Ready to Design" stage. This is critical because it means the ticket wasn't fully ready for development, indicating issues with task definition, missing requirements, or areas needing rework. High numbers here signal that the definition process needs improvement.
                </p>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/measuring-design-work/image-525-ready-to-design.png"
                    alt="Tickets returning to Ready to Design metrics"
                    width={539}
                    height={313}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>

              {/* Designer Performance Over Time */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Designer Performance Over Time
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Looking at how individual designers perform over time is another important metric. By tracking the number of tickets each designer resolves, along with the time spent on each, we can analyse both productivity and improvement.
                </p>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/measuring-design-work/image-526-designer-performance.png"
                    alt="Designer performance over time metrics"
                    width={539}
                    height={301}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Qualitative Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Qualitative: Designer Growth, Feedback, and Collaboration
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                The qualitative side focuses on the growth and quality of work. It's about understanding how things are done, who is improving, and where we can make the design work better.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                For this, I use a range of feedback loops and collaborative practices
              </p>

              {/* Design Crits */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Design Crits
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Every week, we hold Design Crits where each designer shares work for feedback and gets a quick overview of where they're at. This is where I ensure that designs meet the required standards and provide actionable feedback. It's also an opportunity to spot any issues early and steer the designs in the right direction.
                </p>
              </div>

              {/* Figma Access & Process Tracking */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Figma Access & Process Tracking
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  For major design work, I follow the designer's process by checking Figma files. This helps me understand how the design evolves, identify any potential issues early on, and provide support when needed.
                </p>
              </div>

              {/* Meetings */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Meetings
                </h3>
                <ul className="list-disc list-inside pl-4 flex flex-col gap-4 text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  <li>
                    <strong>Product Sync:</strong> I occasionally join the meeting between product owners and designers to stay updated on what the designer is working on and any major challenges they're facing.
                  </li>
                  <li>
                    <strong>Designer + Head of Design:</strong> Each month, I sit down with every designer to discuss their best work, the most challenging projects they faced, and overall growth. This helps me stay connected to their development and offer guidance where necessary.
                  </li>
                  <li>
                    <strong>Product Owner + Head of Design:</strong> I also have monthly 1:1s with each product owner to discuss how they perceive the designer's work and find ways to improve the design process.
                  </li>
                </ul>
              </div>

              {/* Design Café */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Design Café: Solving Complex Problems
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  For particularly complex or disruptive work, we hold a weekly Design Café meeting. The team comes together to tackle the problem at hand, define new guidelines, and brainstorm solutions. This meeting is essential for pushing boundaries and ensuring that we stay ahead of challenges.
                </p>
              </div>

              {/* Tracking Designer Growth */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Tracking Designer Growth
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Beyond just tracking outcomes, it's important to track the growth of each designer. When a more junior designer is about to face a particularly complex task, I make sure to offer extra support to help them overcome challenges. Growth isn't just about delivering work—it's about building confidence and skill in taking on new challenges.
                </p>
              </div>

              {/* Aligning with Business */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Aligning with Business
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Finally, it's crucial that the design team stays aligned with business goals. I have regular meetings with the business team to discuss the backlog and get a clear image of what is expected from the design team. After each demo, we have a feedback loop to discuss if the work matches what was expected. This keeps us on track, ensures our design efforts align with business needs, and allows us to adjust course when needed. Staying aligned with business is key to ensuring our design work has real impact.
                </p>
              </div>
            </div>
          </div>

          {/* How I Act on It Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              How I Act on It: Continuous Improvement and Team Growth
            </h2>
            <div className="flex flex-col gap-6 w-full">
              {/* Rework and Definition Clarity */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Rework and Definition Clarity
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  If high numbers of tickets are returning to "Ready to Design," I take action to improve task definitions and clarify expectations upfront. This reduces the chances of rework and ensures that tasks are truly ready before moving forward.
                </p>
              </div>

              {/* Task Complexity and Time Estimates */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Task Complexity and Time Estimates
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  When I notice recurring mismatches between task complexity and the time spent on it, I revisit our time estimates and make adjustments. This helps us fine-tune how we approach different types of tasks, ensuring we're working smarter, not harder.
                </p>
              </div>

              {/* Designer Development */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Designer Development
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  I focus on supporting designers at every level, especially when a junior designer faces complex tasks. If needed, I step in directly or assign a more experienced design partner to help them tackle the challenge and grow in the process.
                </p>
              </div>

              {/* Fostering Collaboration */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Fostering Collaboration
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Through the Design Partner Approach, I pair designers with different levels of experience to work together on complex tasks. The goal is to ensure knowledge-sharing, encourage collaboration, and help both designers learn from each other. This not only resolves tasks more effectively but also builds strong relationships that extend beyond the initial project.
                </p>
              </div>

              {/* Solving Complex Problems Together */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Solving Complex Problems Together
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  When a particularly complex or disruptive task arises, we come together for a Design Café meeting. This is a space where the team collaborates to define guidelines and find solutions for challenges that push the boundaries of what we're used to. These sessions ensure that we remain innovative and aligned when tackling difficult problems.
                </p>
              </div>

              {/* Regular Feedback */}
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Regular Feedback
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  I make sure feedback from both the product owners and the team is always actionable. After each sprint and demo, I integrate the insights into the following cycle, constantly improving how we approach our work and ensure we're meeting expectations.
                </p>
              </div>
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

