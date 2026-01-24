"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShieldCheck, Users, MapPin, CreditCard } from "lucide-react"
import Image from "next/image"

const trustBadges = [
  { icon: ShieldCheck, text: "100% Halal Verified" },
  { icon: Users, text: "2,000+ Waiting" },
  { icon: MapPin, text: "Nigerian-Owned" },
  { icon: CreditCard, text: "Paystack Secure" },
]

const features = ["Verified Islamic Products", "Trusted Service Providers", "Faith-Based Business Community"]

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-sandstone via-background to-primary/5 overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 islamic-pattern opacity-50" />

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Pre-headline */}
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm">
              Launching Soon in Lagos & Ibadan
            </Badge>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Shop. Connect. Grow.
              <span className="block text-primary mt-2">Nigeria&apos;s First Complete Muslim Lifestyle Platform</span>
            </h1>

            {/* Subheadline with checkmarks */}
            <div className="space-y-3">
              <p className="text-lg lg:text-xl text-muted-foreground">Everything Muslims need in one trusted place:</p>
              <div className="space-y-2">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <span className="text-base lg:text-lg text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join 100+ Muslims on Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg bg-transparent"
              >
                Watch Demo Video
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 lg:gap-6 pt-6 border-t border-border"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/muslim-woman-shopping-online-elegant-modern.jpg"
                alt="Muslim woman shopping online"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/muslim-entrepreneur-business-owner-working-laptop.jpg" alt="Muslim entrepreneur working" fill className="object-cover" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card rounded-xl shadow-xl p-6 border border-primary/20"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Muslims Waiting</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
