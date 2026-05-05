import { motion } from "framer-motion"
import { Coffee, IceCream, Popcorn, Soup, Utensils } from "lucide-react"
import heroImage from "@/assets/logo1.png"

const categoryChips = [
  { label: "Dishes", icon: Utensils, offset: 0, position: "-right-2 top-4" },
  { label: "Dessert", icon: IceCream, offset: 0.2, position: "-right-6 top-16" },
  { label: "Drinks", icon: Coffee, offset: 0.4, position: "-right-8 top-28" },
  { label: "Platter", icon: Soup, offset: 0.6, position: "-right-10 top-40" },
  { label: "Snacks", icon: Popcorn, offset: 0.8, position: "-right-8 top-52" },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-4 md:pt-14 min-h-[90vh] flex items-center bg-(--warm-beige)">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-subheading mb-4 text-sm uppercase tracking-[0.3em] font-semibold text-(--coffee-brown)">
            Quezel's Cafe Hub
          </p>
          <h1 className="font-hero text-5xl leading-tight md:text-7xl text-(--dark-espresso)">
            A seamless blend of modern flavor & local charm.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Order your favorite artisanal coffee, breakfast, and halo-halo effortlessly. Experience our cozy lounge or grab flavor on the go with our smart ordering system.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-(--dark-espresso) px-8 py-4 text-sm font-semibold text-(--cream-white) shadow-diffuse-lg hover:opacity-90 transition-all"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-(--coffee-brown) px-8 py-4 text-sm font-semibold text-(--dark-espresso) hover:bg-(--parchment) transition-all"
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-lg mx-auto lg:max-w-none"
        >
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-(--soft-gold) opacity-20 blur-3xl" />
          <div className="relative flex items-center justify-center">
            <motion.img
              src={heroImage}
              alt="Halo-halo and coffee on a plate"
              className="relative z-10 h-80 w-80 md:h-[30rem] md:w-[30rem] object-contain"
              loading="lazy"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute right-0 top-0 z-20 hidden md:block">
              {categoryChips.map((chip) => {
                const Icon = chip.icon
                return (
                  <motion.div
                    key={chip.label}
                    className={`absolute ${chip.position}`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: chip.offset }}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-border bg-(--cream-white) px-3 py-1.5 text-xs font-semibold text-(--dark-espresso) shadow-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--parchment)">
                        <Icon className="h-3.5 w-3.5 text-(--coffee-brown)" />
                      </span>
                      {chip.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:hidden">
            {categoryChips.map((chip) => (
              <div
                key={`${chip.label}-mobile`}
                className="flex items-center gap-2 rounded-full border border-border bg-(--cream-white) px-3 py-1 text-[11px] font-semibold text-(--dark-espresso) shadow-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--parchment)">
                  <chip.icon className="h-3 w-3 text-(--coffee-brown)" />
                </span>
                {chip.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-60 top-0 h-[40rem] w-[40rem] rounded-full bg-(--parchment) opacity-50 blur-3xl" />
      </div>
    </section>
  )
}
