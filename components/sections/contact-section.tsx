"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import type { SocialLink } from "@/types/portfolio-types"

interface ContactSectionProps {
  socialLinks: SocialLink[]
}

export default function ContactSection({ socialLinks }: ContactSectionProps) {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold mb-10 text-center relative inline-block mx-auto">
        Get In Touch
        <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactInfo socialLinks={socialLinks} />
        <ContactForm />
      </div>
    </SectionWrapper>
  )
}

function ContactInfo({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full border-t-4 border-t-primary/70 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Feel free to reach out through any of these channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialLinks.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center"
            >
              <span className="mr-3 text-muted-foreground">{contact.icon}</span>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors relative group"
              >
                {contact.text || contact.href.replace(/(mailto:|https?:\/\/)/g, "")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full border-t-4 border-t-primary/70 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Send Me a Message</CardTitle>
          <CardDescription>I'll get back to you as soon as possible</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Your name"
                  className="w-full p-2 rounded-md border border-input bg-background transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 rounded-md border border-input bg-background transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                placeholder="Subject"
                className="w-full p-2 rounded-md border border-input bg-background transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={4}
                className="w-full p-2 rounded-md border border-input bg-background resize-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <Button type="submit" className="w-full relative overflow-hidden group">
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
