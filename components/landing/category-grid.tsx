"use client"

import { motion } from "framer-motion"
import { Shirt, UtensilsCrossed, BookOpen, Sparkles, GraduationCap, PartyPopper, Scissors, Home } from "lucide-react"

const productCategories = [
  { icon: Shirt, name: "Islamic Apparel", count: "500+ items" },
  { icon: UtensilsCrossed, name: "Halal Food", count: "200+ vendors" },
  { icon: BookOpen, name: "Islamic Books", count: "1,000+ titles" },
  { icon: Sparkles, name: "Halal Beauty", count: "150+ products" },
]

const serviceCategories = [
  { icon: GraduationCap, name: "Quran Tutors", count: "100+ verified" },
  { icon: PartyPopper, name: "Event Planners", count: "50+ professionals" },
  { icon: Scissors, name: "Modest Fashion", count: "75+ designers" },
  { icon: Home, name: "Home Services", count: "80+ providers" },
]

export default function CategoryGrid() {
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
            Explore Our Categories
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            From products to services, find everything you need
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Products */}
          <div>
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shirt className="w-5 h-5 text-primary" />
              </span>
              Products
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <category.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading font-semibold text-foreground mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </span>
              Services
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <category.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading font-semibold text-foreground mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
