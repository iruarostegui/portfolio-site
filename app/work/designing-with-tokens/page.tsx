'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function DesigningWithTokensPage() {
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
              Designing with Tokens
            </h1>
            <p className="text-2xl leading-[1.2em] text-[#EAEAEA] font-normal">
              Adapting Design Systems for Diverse Products
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-24 w-full">
          {/* Introduction */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-row gap-6 items-center w-full">
              <div className="flex-1 flex flex-col gap-6">
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  At Supervielle Group, I was in charge of the implementation of a unified design system across three distinct products: Banco (bank) Supervielle, Supervielle Seguros (insurance), and IUDU (digital wallet).
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  The goal was clear, take advantage of the recently launched design system at Banco Supervielle (Kite), the largest company within the group, to streamline and harmonize the design language across all subsidiaries.
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  This strategic approach aimed to optimize efficiency and ensure seamless consistency while minimizing implementation efforts.
                </p>
              </div>
              <div className="w-full max-w-[300px] flex-shrink-0">
                <ImageLightbox
                  src="/images/designing-with-tokens/image-535.png"
                  alt="Supervielle Group products overview"
                  width={300}
                  height={147}
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Building the Color Framework */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Building the Color Framework
            </h2>
            <div className="flex flex-col gap-6 w-full">
              <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                Our initial challenge was to enrich the color palette from the original design system. With only five color values available per palette, we required more flexibility to meet the diverse visual needs of each product. To address this, we methodically established nine distinct values per color, offering extensive flexibility for customization and adaptation to each product's unique requirements.
              </p>
              <div className="flex flex-row gap-8 items-start w-full flex-wrap">
                <div className="flex-1 min-w-[300px]">
                  <ImageLightbox
                    src="/images/designing-with-tokens/image-529.png"
                    alt="Color palette expansion"
                    width={576}
                    height={337}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
                <div className="flex-1 min-w-[300px]">
                  <ImageLightbox
                    src="/images/designing-with-tokens/image-528.png"
                    alt="Color values system"
                    width={576}
                    height={434}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Global tokens */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-row gap-8 items-start w-full flex-wrap">
              <div className="flex-1 min-w-[300px] flex flex-col gap-6">
                <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Global tokens
                </h2>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Once the color values were established, we assigned them meaningful names to create global tokens (also knows as primitives tokens) for easy reference.
                </p>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  This standardized naming convention ensured consistency across all three products, laying the foundation for a cohesive design system.
                </p>
              </div>
              <div className="flex-1 min-w-[300px]">
                <ImageLightbox
                  src="/images/designing-with-tokens/image-530.png"
                  alt="Global tokens structure"
                  width={728}
                  height={549}
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Alias tokens */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-row gap-8 items-start w-full flex-wrap">
              <div className="flex-1 min-w-[300px] flex flex-col gap-6">
                <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
                  Alias tokens
                </h2>
                <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
                  Next, we defined the alias tokens, also known as semantic tokens, which helped associate meaning with colors. This process allowed us to distinguish between the various 'flavors' of the design system, ensuring each product maintained its unique identity.
                </p>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl leading-[1.2em] text-[#EAEAEA] font-medium">
                    Why Not Use Component-Level Tokens?
                  </h3>
                  <p className="text-base leading-[1.75em] text-[#777777] font-normal">
                    Given the complexity of implementing them across multiple products, we opted for a higher-level approach. While this choice restricted the degree of customization available for each flavor, it facilitated a smoother implementation process and upheld structural consistency across all interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <ImageLightbox
                src="/images/designing-with-tokens/image-531.png"
                alt="Alias tokens for Banco Supervielle"
                width={1194}
                height={558}
                className="w-auto h-auto max-w-full"
              />
              <ImageLightbox
                src="/images/designing-with-tokens/image-532.png"
                alt="Alias tokens for Supervielle Seguros"
                width={1194}
                height={558}
                className="w-auto h-auto max-w-full"
              />
              <ImageLightbox
                src="/images/designing-with-tokens/image-533.png"
                alt="Alias tokens for IUDU"
                width={1194}
                height={558}
                className="w-auto h-auto max-w-full"
              />
              <div className="flex flex-row gap-8 items-start w-full flex-wrap">
                <div className="flex-1 min-w-[300px] flex flex-col gap-4">
                  <ImageLightbox
                    src="/images/designing-with-tokens/image-534.png"
                    alt="IUDU color scheme adjustments"
                    width={460}
                    height={102}
                    className="w-auto h-auto max-w-full"
                  />
                  <p className="text-base leading-[1.75em] text-[#777777] font-normal">
                    As IUDU had a distinct look and feel, we adjusted our color scheme accordingly.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#777777] font-normal">
                    Purple became the primary color, while blue was designated as the info color. Red, previously the primary color, was reserved for errors.
                  </p>
                  <p className="text-base leading-[1.75em] text-[#777777] font-normal">
                    This ensured consistency across the design system while meeting each product's branding needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
              Conclusion
            </h2>
            <p className="text-base leading-[1.75em] text-[#EAEAEA] font-normal">
              In essence, our approach to implementing the design system at Supervielle Group focused on efficiency, collaboration, and adaptability. By leveraging existing resources and adjusting elements at a higher level where necessary, we established a unified design ecosystem that seamlessly integrates across diverse products.
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

