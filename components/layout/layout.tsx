"use client"

import { type ReactNode, useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import type { SocialLink } from "@/types/portfolio-types"

interface LayoutProps {
  children: ReactNode
  socialLinks: SocialLink[]
}

export default function Layout({ children, socialLinks }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="container py-10 relative z-10">{children}</main>
      <Footer socialLinks={socialLinks} />
    </>
  )
}
