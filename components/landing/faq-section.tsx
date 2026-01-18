"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "When will UmMahrket launch?",
    answer:
      "We're targeting Q2 2024 for our beta launch in Lagos and Abuja. Join the waitlist to be among the first to access the platform and receive exclusive founding member benefits.",
  },
  {
    question: "How do you verify sellers and service providers?",
    answer:
      "Our verification process includes business registration checks, Islamic credentials verification (where applicable), portfolio reviews, and community references. We also implement ongoing monitoring through customer reviews and ratings.",
  },
  {
    question: "What payment methods will be supported?",
    answer:
      "We're partnering with Paystack to support bank transfers, debit cards, and mobile money. All transactions are secured with industry-standard encryption and escrow protection for services.",
  },
  {
    question: "Is it free to sell on UmMahrket?",
    answer:
      "Yes! Onboarding is completely free. We only charge a small commission on successful transactions (10-15% for products, 15-20% for services) — significantly lower than many competitors.",
  },
  {
    question: "What categories of products and services will be available?",
    answer:
      "Products include Islamic apparel, prayer items, halal food & beverages, books, electronics, and halal beauty products. Services cover Quran tutoring, Islamic event planning, halal catering, modest fashion design, and home services.",
  },
  {
    question: "How can I become a vendor or service provider?",
    answer:
      "Join our waitlist and select 'Selling Products' or 'Offering Services' as your interest. We'll reach out with onboarding details before launch, including verification requirements and setup support.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-16 lg:py-20 bg-sandstone">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">Everything you need to know about UmMahrket</p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
