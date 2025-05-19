"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { SocialLink } from "@/types/portfolio-types"

interface FooterProps {
  socialLinks: SocialLink[]
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t py-8 transition-colors duration-300">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-4 md:mb-0"
        >
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-4"
        >
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild className="relative overflow-hidden group">
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">{social.icon}</span>
                <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></span>
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
