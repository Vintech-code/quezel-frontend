import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Coffee, Smartphone, CreditCard, Utensils } from "lucide-react"
import useScrollDirection from "@/hooks/use-scroll-direction"

const features = [
  {
    title: "Seamless Ordering",
    description: "Order ahead for pickup or delivery with our intuitive app interface.",
    icon: <Smartphone className="size-6 text-(--soft-gold)" />,
  },
  {
    title: "Smart POS System",
    description: "Fast, reliable point-of-sale for a smooth dine-in experience.",
    icon: <CreditCard className="size-6 text-(--soft-gold)" />,
  },
  {
    title: "Artisanal Coffee",
    description: "Sourced directly, roasted locally, and brewed with precision.",
    icon: <Coffee className="size-6 text-(--soft-gold)" />,
  },
  {
    title: "Local Favorites",
    description: "From our signature breakfast plates to our house-special Halo-Halo.",
    icon: <Utensils className="size-6 text-(--soft-gold)" />,
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"

  return (
    <section ref={sectionRef} className="px-6 py-24 bg-(--parchment)">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-subheading text-sm uppercase tracking-[0.3em] text-(--coffee-brown)">
            More than just a cafe
          </p>
          <h2 className="mt-4 font-display text-4xl">Modern Convenience meets Cozy Comfort</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-(--cream-white) border border-(--border) shadow-diffuse flex flex-col items-start gap-4"
            >
              <div className="p-3 rounded-full bg-(--dark-espresso)">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
