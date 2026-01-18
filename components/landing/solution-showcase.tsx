"use client"

import { motion } from "framer-motion"
import { ShoppingBag, UserCheck, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const solutions = [
  {
    badge: "Shop Verified Products",
    icon: ShoppingBag,
    title: "Shop with Complete Confidence",
    features: [
      "Every seller pre-verified (business registration + Islamic credentials)",
      "Halal certification for all food & beauty products",
      "Community reviews from fellow Muslims",
      "Categories: Islamic apparel, prayer items, halal food, books, electronics",
    ],
    image: "/islamic-ecommerce-product-listing-mobile-app-halal.jpg",
    imagePosition: "right" as const,
  },
  {
    badge: "Book Trusted Services",
    icon: UserCheck,
    title: "Find Service Providers You Can Trust",
    features: [
      "Verified Muslim professionals across 10+ categories",
      "Book Quran tutors, event planners, halal caterers, and more",
      "See credentials, portfolios, and real reviews",
      "Secure booking with escrow payment protection",
    ],
    image: "/service-booking-app-quran-tutor-muslim-professiona.jpg",
    imagePosition: "left" as const,
  },
  {
    badge: "Grow Your Business",
    icon: TrendingUp,
    title: "Turn Your Passion into Profit",
    features: [
      "Free seller/provider onboarding",
      "Reach 100M+ Nigerian Muslims",
      "Low commission rates (10-15% products, 15-20% services)",
      "Marketing tools, analytics, and business support",
    ],
    image: "/vendor-dashboard-analytics-business-growth-muslim-.jpg",
    imagePosition: "right" as const,
  },
]

export default function SolutionShowcase() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            One Platform, Everything You Need
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Verification. Connection. Growth. All in one trusted place.
          </p>
        </motion.div>

        {/* Solution Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
            >
              {/* Content */}
              <div className={`space-y-6 ${solution.imagePosition === "left" ? "lg:order-2" : ""}`}>
                <Badge className="bg-primary/10 text-primary px-4 py-2 hover:bg-primary/10">
                  <solution.icon className="w-4 h-4 mr-2 inline" />
                  {solution.badge}
                </Badge>

                <h3 className="font-heading text-2xl lg:text-4xl font-bold text-foreground text-balance">
                  {solution.title}
                </h3>

                <ul className="space-y-4">
                  {solution.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Image/Mockup */}
              <div className={solution.imagePosition === "left" ? "lg:order-1" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/2]"
                >
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
