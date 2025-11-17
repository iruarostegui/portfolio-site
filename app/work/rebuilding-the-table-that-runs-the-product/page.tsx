'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
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
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    UI inconsistencies: nothing matched across the platform.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    More work for developers: fixes and updates had to be applied multiple times.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Slower iterations: a single change wasn't just a quick tweak, it was a full-on project.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    It was clear we needed a single, scalable table: not a dozen slightly different ones.
                  </p>
                </div>
                {/* Image placeholder - will be added after downloading */}
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  MUI Was Holding Us Back
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The original design system was built on MUI's table component (before I joined). It worked at first, but over time, it became a huge constraint:
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Customizing it was painful. We had to hack around it just to get basic flexibility.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    New features became harder to implement. The more we built on top, the messier it got.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Scaling? Forget it. The table wasn't evolving with the product, it was limiting it.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The more we tried to work with it, the more we realized we needed to replace it.
                  </p>
                </div>
                {/* Image placeholder - will be added after downloading */}
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
                    We replaced MUI with TanStack Table—a headless library that gave us the flexibility we needed without the bloat. The result? A single, unified table component that works across the entire platform.
                  </p>
                  {/* Image placeholder - will be added after downloading */}
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  A Table That Adapts to Users (Not the Other Way Around)
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    Users Wanted Control, But the Table Wasn't Built for It
                  </p>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    The old table was rigid. Users couldn't customize columns, adjust filters, or save their preferences. Every interaction felt like a compromise.
                  </p>
                  {/* Image placeholder - will be added after downloading */}
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Filtering: Actually Useful Now
                </h3>
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    We redesigned filtering from the ground up. Now users can combine filters, save presets, and get exactly the data they need—without fighting the interface.
                  </p>
                  {/* Image placeholder - will be added after downloading */}
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
                    Goodbye, ZeroHeight. Hello, Figma.
                  </p>
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
                  <div className="w-full my-4">
                    <ImageLightbox
                      src="/images/rebuilding-the-table/image-517.png"
                      alt="ZeroHeight to Figma migration"
                      width={1270}
                      height={859}
                      className="w-auto h-auto max-w-full"
                    />
                  </div>
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
                      width={624}
                      height={1139}
                      className="w-auto h-auto max-w-full"
                    />
                  </div>
                  <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                    This means designers aren't just working faster, they're also ensuring accuracy and alignment from the start. Every table now uses standardized content, making the handoff to devs smoother and eliminating inconsistencies. With all these changes, designing a new table now takes 60% less time, and the content looks polished, realistic, and ready for implementation from the start.
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
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Table weight dropped by ~40%
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Designing tables in Figma is now 60% faster.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Dev time improved by ~30%, measured through Jira tickets.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Collaboration between design & dev? Finally smooth.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                What used to be rigid and frustrating is now scalable, flexible, and actually supports our users.
              </p>
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
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Advanced filtering: more control, better UX.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Batch actions: faster bulk updates.
              </p>
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Deeper data insights: giving users even more power.
              </p>
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

