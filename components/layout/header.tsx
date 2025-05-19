"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Download, Menu, Moon, Sun, X } from "lucide-react"
import { navLinks } from "@/data/portfolio-data"
import type { NavItem } from "@/types/portfolio-types"

interface HeaderProps {
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only accessed client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl"
        >
          John Doe
        </motion.div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((item: NavItem, index: number) => (
            <NavLink key={item.name} item={item} index={index} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle mounted={mounted} theme={theme} toggleTheme={toggleTheme} />
          <ResumeButton />
          <MobileMenuButton mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>

      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navLinks={navLinks} />
    </header>
  )
}

// Sub-components
function NavLink({ item, index }: { item: NavItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors relative group">
        {item.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </motion.div>
  )
}

function ThemeToggle({ mounted, theme, toggleTheme }: { mounted: boolean; theme?: string; toggleTheme: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      {mounted && (
        <Button variant="outline" size="icon" onClick={toggleTheme} className="mr-2">
          <span className="sr-only">Toggle theme</span>
          {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      )}
    </motion.div>
  )
}

function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
      className="hidden md:block"
    >
      <Button variant="outline" size="sm">
        <Download className="mr-2 h-4 w-4" />
        Resume
      </Button>
    </motion.div>
  )
}

function MobileMenuButton({
  mobileMenuOpen,
  toggleMobileMenu,
}: { mobileMenuOpen: boolean; toggleMobileMenu: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
      className="md:hidden"
    >
      <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
        <span className="sr-only">Toggle menu</span>
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </motion.div>
  )
}

function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  navLinks,
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  navLinks: NavItem[]
}) {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t bg-background/95 backdrop-blur"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
