import type { ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  children: ReactNode
}

export function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-16 scroll-mt-16">
      {children}
    </section>
  )
}
