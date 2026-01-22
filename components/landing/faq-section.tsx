"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "When will UmMarket launch?",
    answer:
      "We are targeting end of Q1 'Ramadan' 2026 for our beta launch in Lagos and Ibadan. Join the waitlist to be among the first to access the platform and receive exclusive founding member benefits.",
  },
  {
    question: "How do you verify sellers and service providers?",
    answer:
      "Our verification process includes business registration checks, Goverment services 'C.A.C', Islamic credentials verification (where applicable), portfolio reviews, and community references. We also implement ongoing monitoring through customer reviews and ratings.",
  },
  {
    question: "What payment methods will be supported?",
    answer:
      "We are partnering with Paystack to support bank transfers, debit cards, and mobile money. All transactions are secured with industry-standard encryption and escrow 'pay on delivery' protection for services.",
  },
  {
    question: "Is it free to sell on UmMarket?",
    answer:
      "Yes! Onboarding is completely free. We only charge a small commission on successful transactions (5-15% for products, 15-20% for services) — ensuring easy end to end services.",
  },
  {
    question: "What categories of products and services will be available?",
    answer:
      "Products include Islamic apparel, Prayer items, Halal food & beverages, Books, Electronics, and halal beauty products. Services cover Quran tutoring, Islamic event planning, Halal catering, Modest fashion design, and Home services,....",
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
