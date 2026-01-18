"use client"

import { motion } from "framer-motion"
import WaitlistForm from "./waitlist-form"

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Join the Movement
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/80">
              Be among the first to experience Nigeria&apos;s complete Muslim lifestyle platform
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 lg:p-10 shadow-2xl"
          >
            <WaitlistForm />
          </motion.div>

          {/* Founding Member Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-primary-foreground/80 text-sm mb-4">Founding Member Benefits:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Early Access", "Exclusive Discounts", "Priority Support", "Free Verification"].map((benefit, i) => (
                <span
                  key={i}
                  className="bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
