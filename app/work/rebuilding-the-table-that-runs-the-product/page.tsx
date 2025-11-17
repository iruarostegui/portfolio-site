'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function RebuildingTheTablePage() {
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
              Rebuilding the Table That Runs the Product
            </h1>
            <p className="text-2xl leading-[1.2em] text-[#EAEAEA] font-normal">
              Fixing the Most Critical UI Element Without Disrupting Workflows
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* TL;DR Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              TL;DR – The Table Overhaul in 30 Seconds
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                The table in Membrane wasn't just another UI element, it was the backbone of the product. But as the platform grew, the table wasn't keeping up. It was inconsistent, rigid, and slowing everyone down, from users to developers.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                We fixed that.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Switched from MUI to TanStack Table for better performance & flexibility.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Redesigned filtering & customization so users could actually get what they needed.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Moved documentation from ZeroHeight to Figma, making life easier for devs.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Cut table weight by ~40%, sped up design work by 60%, and cut dev time by 30%.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Now? Same familiar UI, but infinitely more powerful and easier to work with.
              </p>
            </div>
          </div>

          {/* A Table That Couldn't Keep Up Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              A Table That Couldn't Keep Up
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                The table was everywhere, 85% of the app depended on it. But instead of helping users work smarter, it was slowing them down.
              </p>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  A Mess of Inconsistencies
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    At first glance, the table looked fine. But under the hood? A fragmented mess.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Each screen had its own variation, which meant:
                  </p>
                  <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                    <li>UI inconsistencies: nothing matched across the platform.</li>
                    <li>More work for developers: fixes and updates had to be applied multiple times.</li>
                    <li>Slower iterations: a single change wasn't just a quick tweak, it was a full-on project.</li>
                  </ul>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    It was clear we needed a single, scalable table: not a dozen slightly different ones.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-519-pie-charts.png"
                    alt="Table inconsistencies across the platform"
                    width={899}
                    height={321}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  MUI Was Holding Us Back
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The original design system was built on MUI's table component (before I joined). It worked at first, but over time, it became a huge constraint:
                  </p>
                  <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                    <li>Customizing it was painful. We had to hack around it just to get basic flexibility.</li>
                    <li>New features became harder to implement. The more we built on top, the messier it got.</li>
                    <li>Scaling? Forget it. The table wasn't evolving with the product, it was limiting it.</li>
                  </ul>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The more we tried to work with it, the more we realized we needed to replace it.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-mui-holding-back.png"
                    alt="MUI table limitations"
                    width={880}
                    height={495}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Users Wanted Control, But the Table Wasn't Built for It
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Membrane users (big financial institutions in web3) have wildly different ways of working. Even within the same company, some users needed all the data, while others just wanted a streamlined view.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    But our table didn't let them:
                  </p>
                  <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                    <li>Filters weren't powerful enough: users couldn't refine their views properly.</li>
                    <li>Columns were fixed: no easy way to customize layouts.</li>
                    <li>Nothing saved between sessions: every time they logged in, they had to set it up again.</li>
                  </ul>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Instead of adapting to users, the table was forcing them into a rigid workflow.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    It was clear: we weren't just updating the table, we had to rethink how it worked from the ground up.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-users-wanted-control-2ad2d5.png"
                    alt="User control limitations"
                    width={320}
                    height={746}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* A Table That Works for Everyone Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              A Table That Works for Everyone
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                We didn't just fix the table, we rebuilt it to scale.
              </p>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  One Unified Table That Just Works
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    First, we dropped MUI and replaced it with TanStack Table.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    This instantly gave us:
                  </p>
                  <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                    <li>Better performance: faster rendering, even with massive datasets.</li>
                    <li>More flexibility: we could finally customize without hacks.</li>
                    <li>Scalability: ready for whatever we threw at it next.</li>
                  </ul>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Now, every table across the platform ran on the same, powerful foundation, no more inconsistencies.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-unified-table.png"
                    alt="Unified table implementation"
                    width={880}
                    height={549}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  A Table That Adapts to Users (Not the Other Way Around)
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    To keep things consistent yet flexible, we integrated TanStack Table with our Core library.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The UI stayed the same: no learning curve for users.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Customization got easier: without breaking the design system.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Developers had more control: cleaner code, fewer workarounds.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Now, building, maintaining, and scaling tables was seamless.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-adapts-to-users.png"
                    alt="Table adapting to users"
                    width={320}
                    height={810}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Filtering: Actually Useful Now
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    We redesigned filtering in two phases:
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    First: Saved Filters & Column Sets
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Users could save and reapply their filter setups.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Column visibility became customizable per user.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Filters stuck between sessions—no more starting from scratch.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Then: Additive Filters & A Cleaner UI
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Filters now stacked instead of resetting, making them more intuitive.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The UI was streamlined, cutting out unnecessary complexity.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Now, users didn't have to fight the table to get the view they needed.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-filtering.png"
                    alt="Improved filtering interface"
                    width={705}
                    height={287}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* What Else We Improved Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              What Else We Improved
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Fixing Dev-Design Collaboration (And Making Everyone's Life Easier)
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    While we were overhauling the table, we took the chance to fix the process issues that made working with it frustrating.
                  </p>
                  <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                    <li>Standardized states: hover, focus, and active were now predictable.</li>
                    <li>Unified event triggers: row selection, inline editing, and clicks behaved consistently.</li>
                    <li>Better naming conventions, so Figma and code finally spoke the same language.</li>
                  </ul>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Less confusion, faster development, and way fewer back-and-forths.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-517.png"
                    alt="Dev-design collaboration improvements"
                    width={880}
                    height={595}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Goodbye, ZeroHeight. Hello, Figma.
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    We also moved all documentation from ZeroHeight to Figma.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Devs weren't using ZeroHeight, it wasn't where they worked.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Now, everything is inside Figma, they can inspect and grab what they need instantly.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Less friction, faster updates, everyone works from the same source of truth.
                  </p>
                </div>
                <div className="w-full my-4">
                  <ImageLightbox
                    src="/images/rebuilding-the-table/image-520-zerheight-figma.png"
                    alt="ZeroHeight to Figma migration"
                    width={880}
                    height={453}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Designing Tables in Figma? Now 60% Faster.
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    We cleaned up the Figma file structure, so designing tables went from tedious to streamlined.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Unnecessary layers? Gone.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Pre-built table templates? Added.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Messy overrides? Fixed.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    On top of that, we leveraged Content Reel PlugIn to create and reuse structured content directly in Figma. Instead of manually typing placeholder text every time, designers can now pull realistic data instantly, keeping everything consistent across screens.
                  </p>
                  <div className="w-full my-4">
                    <ImageLightbox
                      src="/images/rebuilding-the-table/image-513.png"
                      alt="Figma table design improvements"
                      width={312}
                      height={568}
                      className="w-auto h-auto max-w-full"
                    />
                  </div>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    This means designers aren't just working faster, they're also ensuring accuracy and alignment from the start. Every table now uses standardized content, making the handoff to devs smoother and eliminating inconsistencies.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    With all these changes, designing a new table now takes 60% less time, and the content looks polished, realistic, and ready for implementation from the start.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Changed? Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              What Changed?
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Even though the table looks the same, the improvements under the hood were massive:
              </p>
              <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                <li>Table weight dropped by ~40%</li>
                <li>Designing tables in Figma is now 60% faster.</li>
                <li>Dev time improved by ~30%, measured through Jira tickets.</li>
                <li>Collaboration between design & dev? Finally smooth.</li>
              </ul>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                What used to be rigid and frustrating is now scalable, flexible, and actually supports our users.
              </p>
            </div>
          </div>

          {/* Challenges & Lessons Learned Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              Challenges & Lessons Learned
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Migrating to TanStack Wasn't 100% Smooth.
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Some interactions didn't transfer perfectly. We had to test edge cases, refine behaviors, and gradually roll out changes instead of flipping a switch.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Some Teams Were Resistant to Change.
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  MUI had been the default for so long that some teams hesitated to switch. We tested the new table on new screens first, proving the benefits before going all-in.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Our First Filtering Redesign Was Overengineered.
                </h3>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  We originally made it too complex. Based on feedback, we simplified the UI and made filters additive, improving usability.
                </p>
              </div>
            </div>
          </div>

          {/* What's Next? Section */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.25em] text-[#EAEAEA] font-medium uppercase">
              What's Next?
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Now that we have a solid foundation, we can push things even further:
              </p>
              <ul className="flex flex-col gap-2 list-disc list-inside text-base leading-[1.75em] text-[#EAEAEA] font-normal pl-4">
                <li>Advanced filtering: more control, better UX.</li>
                <li>Batch actions: faster bulk updates.</li>
                <li>Deeper data insights: giving users even more power.</li>
              </ul>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                This wasn't just a UI update—it was a complete transformation of how our table works.
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

