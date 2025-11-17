import Link from "next/link"
import { Section } from "@/components/Section"
import { ExperienceItem } from "@/components/ExperienceItem"
import { Footer } from "@/components/Footer"
import { CustomLink } from "@/components/Link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101010]">
      <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[664px] pt-20 max-w-[2176px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-col gap-8 w-full">
          {/* Hero Text */}
          <h1 className="text-[40px] leading-[1.2em] tracking-[-0.025em] font-medium w-full">
            <span className="text-[#EAEAEA]">Hey, I'm Iru</span>
            <span className="text-[#777777]">, system thinker, builder, and designer fixing broken
            stuff (and breaking the ones that deserve it) before paddling out
            and letting the backlog wait.</span>
          </h1>

          {/* About Paragraphs */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-base leading-[1.5em] font-normal w-full">
              <span className="text-[#777777]">Right now I lead design at </span>
              <span className="text-[#EAEAEA]">Membrane</span>
              <span className="text-[#777777]">, where I work on
              crypto-backed loans, collateral systems, and internal tools
              that weren't supposed to scale, so I made them scale. I spend
              most of my time building </span>
              <span className="text-[#EAEAEA]">design systems</span>
              <span className="text-[#777777]">, improving team
              workflows, and turning chaos into structure, whether it's in
              the product, the process, or the way teams collaborate.</span>
            </p>
            <p className="text-base leading-[1.5em] font-normal w-full">
              <span className="text-[#777777]">On the side, I'm building </span>
              <span className="text-[#EAEAEA]">Barely UI</span>
              <span className="text-[#777777]">, a minimal, token-first
              design system built for whitelabel products. I've also been
              exploring ideas around dynamic reservations (</span>
              <span className="text-[#EAEAEA]">Dreeto</span>
              <span className="text-[#777777]">) and
              travel experiences (</span>
              <span className="text-[#EAEAEA]">Drakara</span>
              <span className="text-[#777777]">), both mostly held together with
              my limited dev skills, duct tape, and a questionable amount of
              AI.</span>
            </p>
            <p className="text-base leading-[1.5em] font-normal w-full">
              <span className="text-[#777777]">I'm most at home working where </span>
              <span className="text-[#EAEAEA]">design, systems, and product
              thinking</span>
              <span className="text-[#777777]"> meet. I get energy from organizing chaos and building
              the missing pieces, even if that means making my own. I'm
              especially drawn to messy, early-stage problems and the teams
              willing to go through them.</span>
            </p>
            <p className="text-base leading-[1.5em] font-normal w-full">
              <span className="text-[#777777]">Outside work I surf, swim, and enjoy life with my partner and
              three dogs. Most days start early and end trying to fix
              something (or break it better).</span>
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12 w-full mt-8">
          {/* 00. Work Section */}
          <Section 
            number="00. Work" 
            title={
              <Link 
                href="/work" 
                className="text-sm leading-[1.4285714285714286em] text-[#EAEAEA] font-normal relative inline-block group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#EAEAEA] transition-all duration-300 ease-in-out group-hover:w-full" />
              </Link>
            }
          >
            <div className="flex flex-row items-center w-full gap-3">
              <p className="text-base leading-[1.6em] text-[#EAEAEA] font-normal whitespace-pre-line">
                A curated selection of my work.

                And yeah, it's password-protected. Ask nicely and I'll share it.
              </p>
            </div>
          </Section>

          {/* 01. Experience Section */}
          <Section 
            number="01. Experience" 
            title={
              <CustomLink href="/resume.pdf" className="text-sm leading-[1.4285714285714286em]" external>
                Download full resume
              </CustomLink>
            }
          >
            <div className="flex flex-col gap-3 w-full">
              <ExperienceItem company="Membrane" period="Oct 2022–Present" href="https://membranelabs.com" />
              <ExperienceItem company="Supervielle" period="Feb 2021–Oct 2022" href="https://www.supervielle.com.ar/" />
              <ExperienceItem company="Coderhouse" period="Jan 2021–Sep 2021" href="http://coderhouse.com" />
              <ExperienceItem company="Macher IT" period="Jan 2020–Feb 2021" href="http://macherit.com" />
              <ExperienceItem company="Bruschetti" period="Mar 2019–Jan 2020" href="http://bruschetti.com.ar" />
              <ExperienceItem company="Freelance work" period="Jun 2018–Mar 2019" />
            </div>
          </Section>

          {/* 02. Writing Section */}
          <Section number="02. Writing">
            <div className="flex flex-col gap-3 w-full">
              <CustomLink href="https://medium.com/design-systems-collective/color-tokens-rework-323109ee96a2?source=user_profile_page---------0-------------ca40a8cf3da8----------------------" className="text-base leading-[1.6em]" external>
                I tore down everything I knew about color tokens
              </CustomLink>
              <CustomLink href="https://medium.com/@iruNotFound/continuous-delivery-in-design-c3d7cf5c3d2b" className="text-base leading-[1.6em]" external>
                Continuous delivery in design
              </CustomLink>
              <CustomLink href="https://medium.com/@iruNotFound/scalable-color-systems-0fb1eb66c1ca" className="text-base leading-[1.6em]" external>
                Color mastery, a guide to scalable color systems
              </CustomLink>
            </div>
          </Section>

          {/* 03. Contact Section */}
          <Section number="03. Contact">
            <div className="flex flex-col gap-3 w-full">
              <CustomLink href="https://x.com/iruNotFound" className="text-base leading-[1.6em]" external>
                Twitter
              </CustomLink>
              <CustomLink href="https://www.linkedin.com/in/iruarostegui/" className="text-base leading-[1.6em]" external>
                LinkedIn
              </CustomLink>
              <CustomLink href="mailto:iru.arostegui@gmail.com" className="text-base leading-[1.6em]">
                Email
              </CustomLink>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
