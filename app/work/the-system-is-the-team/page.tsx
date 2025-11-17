'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function TheSystemIsTheTeamPage() {
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
              The System Is the Team
            </h1>
            <p className="text-2xl leading-[1.2em] text-[#EAEAEA] font-normal">
              Building a Design System Where Every Designer and Developer Contributes
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* Introduction */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
              Design systems should empower teams, not burden individuals. But too often, they end up as a one-person bottleneck, slowing teams down instead of helping them move faster. In a fast-growing startup, we realized that a collaborative approach wasn't just a luxury—it was a necessity. Here's how we turned a fragmented system into a scalable, team-driven framework that works for everyone.*
            </p>
          </div>

          {/* Setting Clear Objectives & Roadmap Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Setting Clear Objectives & Roadmap
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                A well-defined roadmap doesn't just guide the system—it empowers teams to contribute confidently, knowing their efforts align with a shared vision.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                A shared roadmap is the backbone of our collaborative process. It outlines key milestones, priorities, and the evolution of our design system, ensuring everyone is aligned. This isn't just about tracking progress—it's about giving every team member visibility and ownership over the system's future.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/the-system-is-the-team/ui-3-1.png"
                  alt="Design system roadmap"
                  width={4096}
                  height={931}
                  className="w-full h-auto max-w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Aligns design and engineering efforts
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Gives transparency to evolving priorities
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Ensures contributions fit into a larger vision
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Encourages team buy-in by making objectives clear
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Reduces misalignment and rework by keeping the team on the same page
                </p>
              </div>
            </div>
          </div>

          {/* Creating Workflows That Make Collaboration Seamless Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Creating Workflows That Make Collaboration Seamless
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Scaling trust is just as important as scaling components. If teams don't trust that the system is reliable, maintained, and aligned with real needs, they'll find workarounds. And when workarounds become the norm, the system stops being a system at all. Our workflow ensures that every change is intentional, peer-reviewed, and documented, so contributors know their input matters and the system stays a shared source of truth.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Collaboration isn't magic—it's process-driven. We refined our workflows to eliminate friction and make contributions effortless.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/the-system-is-the-team/new-components-creation-14583d.png"
                  alt="New components creation workflow"
                  width={880}
                  height={211}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  How We Built a Contribution-Friendly System
                </h3>
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Defined pathways for proposing and implementing changes
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Clear ownership so no component lives in limbo
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Async-friendly collaboration so remote teammates stay in sync
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Low-friction approvals to avoid bottlenecks
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Dedicated feedback loops to continuously improve processes
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Built-in accountability so decisions are documented and traceable
                  </p>
                </div>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  This streamlined workflow turned collaboration from an afterthought into the default.
                </p>
              </div>
            </div>
          </div>

          {/* The Glue That Holds Everything Together Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              The Glue That Holds Everything Together
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                A collaborative design system can't function if documentation falls behind reality. Every new component or variant requires a corresponding update to the documentation.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/the-system-is-the-team/image-521.png"
                  alt="Documentation example"
                  width={880}
                  height={545}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Why This Matters
                </h3>
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Keeps everyone on the same page—no guesswork needed.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Ensures changes align with system guidelines, not personal preferences.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Makes onboarding easier for new designers & developers.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Acts as a single source of truth, reducing design drift.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Prevents repeated questions and improves self-sufficiency.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Accelerates handoff between design and development by reducing ambiguity.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    ✅ Encourages system-wide adoption by ensuring the guidelines are practical and easy to follow.
                  </p>
                </div>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Documentation isn't an extra step—it's part of the design process.
                </p>
              </div>
            </div>
          </div>

          {/* Design-Front Meetings Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Design-Front Meetings
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Collaboration only works when conversations happen before things break. Our Design-Front meetings give designers and developers a dedicated space to challenge ideas, spot issues early, and ensure every update fits within the bigger picture.
              </p>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/the-system-is-the-team/design-front-meetings.svg"
                  alt="Design-Front meetings workflow"
                  width={426}
                  height={912}
                  className="w-auto h-auto max-w-full"
                />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  What Happens in These Meetings
                </h3>
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Propose and refine changes
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Spot potential conflicts early
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Share insights across teams
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Align design and front-end teams before development begins
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Ensure proposed changes fit within long-term system strategy
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Encourage shared ownership by making decisions cross-functional
                  </p>
                </div>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  These sessions keep the conversation flowing, ensuring the system evolves with real user needs.
                </p>
              </div>
            </div>
          </div>

          {/* Design System Update Schema Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Design System Update Schema
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                At the core of our design success lies a meticulously organized update schema. This framework ensures the ongoing relevance of our design assets while fostering a collaborative and systematic approach to evolution. It's the backbone of our efficiency, ensuring that every design iteration aligns seamlessly with our strategic goals.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                A design system should evolve as fast as the team using it. To keep up, we built a structured update schema that makes changes fast, frictionless, and scalable—ensuring the system stays just as agile as our product.
              </p>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Update Stages: How We Keep the System Agile
                </h3>
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Our update schema follows a structured rhythm, ensuring that design and development remain synchronized throughout the week.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Every update follows a clear approval process
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Small changes roll out quickly, major ones get thorough reviews
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Contributions from both design & engineering ensure implementation feasibility
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Updates are announced through changelogs and Slack notifications
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Regular retrospectives help us improve update processes
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Versioning is transparent, so teams can track progress and roll back changes if needed
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Ensures backward compatibility, reducing friction between design and development
                  </p>
                </div>
              </div>
              <div className="w-full my-4">
                <ImageLightbox
                  src="/images/the-system-is-the-team/image-50.png"
                  alt="Design system update schema"
                  width={3136}
                  height={288}
                  className="w-full h-auto max-w-full"
                  style={{ height: '80px', objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Release
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  The week kicks off with the publication of our Figma library and its comprehensive documentation. This intentional timing ensures that all team members have immediate access to the latest design assets and resources, along with the guidance provided by the documentation.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Design Review
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Midweek, we engage in a meticulous evaluation of all issues within the Design System Jira Project. This review phase is critical—we assess each issue against our established design principles. Some may require adjustments to enhance alignment, while others receive approval, marking significant progress in the continual evolution of our design system.
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  As part of our commitment to a collaborative design approach, any designer can contribute to the design system. Designers are encouraged to create a branch in the components Figma file, a practice integral to our workflow and reviewed during our Wednesday sessions.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Front Review
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  As the week concludes, collaboration with the frontend team takes center stage. We closely examine the changes and updates made, ensuring they seamlessly align with our design system. This final review is pivotal, identifying any last-minute adjustments needed to solidify the vision and maintain design consistency across the entire system.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Post-Release Protocol
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  After each library release, we foster a collaborative and organized approach for the entire team:
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Designers' Action Plan: Designers have one week after the release to update their Figma files. This proactive approach ensures that all team members operate with the latest design assets.
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  ✅ Issue Reporting: Designers are encouraged to promptly report any issues identified during the update phase. This transparent feedback loop helps address potential challenges swiftly, ensuring a smooth and error-free user experience.
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  This robust update schema reflects our commitment to an organized, collaborative, and systematic design system workflow, ensuring that every team member is well-prepared and actively involved in the evolution of our design ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* A Living System That Evolves with the Team Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              A Living System That Evolves with the Team
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Our design system isn't static, it's a living entity that grows with our product and team. By prioritizing collaboration, we ensure that our system remains relevant, scalable, and genuinely useful.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Been through something similar? Or thinking about making your design system more collaborative? Let's chat, I'd love to swap insights and hear what's working for your team.
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

