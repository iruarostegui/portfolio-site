'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/Section'
import { CustomLink } from '@/components/Link'
import { Footer } from '@/components/Footer'

const PASSWORD = 'Alohomora'

export default function WorkPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem('portfolio_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PASSWORD) {
      sessionStorage.setItem('portfolio_auth', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#101010] flex items-center justify-center">
        <div className="flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[664px] max-w-[2176px] w-full">
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <h1 className="text-[40px] leading-[1.2em] tracking-[-0.025em] font-medium text-[#EAEAEA]">
              Portfolio
            </h1>
            <p className="text-base leading-[1.5em] text-[#777777]">
              This section is password-protected. Please enter the password to continue.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="bg-[#292929] border border-[#292929] text-[#EAEAEA] px-4 py-3 rounded focus:outline-none focus:border-[#777777] text-base"
                autoFocus
                aria-describedby={error ? "password-error" : undefined}
              />
              {error && (
                <p id="password-error" className="text-sm text-[#EAEAEA]" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="bg-[#EAEAEA] text-[#101010] px-4 py-3 rounded font-medium hover:bg-[#EAEAEA]/90 transition-colors"
              >
                Access
              </button>
            </form>
            <CustomLink href="/" className="text-sm text-[#777777] mt-4">
              ← Back to home
            </CustomLink>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#101010]">
      <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[664px] pt-20 max-w-[2176px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full">
          <CustomLink href="/" className="text-sm text-[#777777] w-fit">
            ← Back to home
          </CustomLink>
          <h1 className="text-[40px] leading-[1.2em] tracking-[-0.025em] font-medium text-[#EAEAEA]">
            Portfolio
          </h1>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12 w-full">
          {/* Membrane Section */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
                Membrane
              </h2>
              <p className="text-base leading-[1.5em] text-[#777777]">
                Membrane is an OTC blockchain protocol within DeFi, focusing on cross-blockchain financial instruments. It's mainly targeted at significant institutions with diverse organizational structures, so defining user personas is really complex.
              </p>
              <p className="text-base leading-[1.5em] text-[#777777]">
                As a new product, Membrane rapidly evolves in multiple directions, facing limited testing before launching any feature and lacking user feedback because of the sensitive information involved. This demands creative approaches to comprehend user needs in an ever-changing and demanding context.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full mt-4">
              <CustomLink href="/work/making-design-systems-suck-less" className="text-base leading-[1.6em]">
                Making Design Systems Suck Less
              </CustomLink>
              <CustomLink href="/work/the-system-is-the-team" className="text-base leading-[1.6em]">
                The System Is the Team
              </CustomLink>
              <CustomLink href="/work/rebuilding-the-table-that-runs-the-product" className="text-base leading-[1.6em]">
                Rebuilding the Table That Runs the Product
              </CustomLink>
            </div>
          </div>

          {/* Supervielle Section */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-2xl leading-[1.2em] text-[#EAEAEA] font-medium">
                Supervielle
              </h2>
              <p className="text-base leading-[1.5em] text-[#777777]">
                Supervielle is a commercial banking institution headquartered in Buenos Aires, Argentina. Offering a diverse range of products and services, including Supervielle Seguros (insurance) and IUDU (digital wallet), the bank serves a broad customer base throughout Argentina.
              </p>
              <p className="text-base leading-[1.5em] text-[#777777]">
                As a designer involved in the development of the design system, I encountered unique challenges in unifying its various offerings due to the distinct brands, teams, objectives, and strategies across the organization.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full mt-4">
              {/* Posts coming soon */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

