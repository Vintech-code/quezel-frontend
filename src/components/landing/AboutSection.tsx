import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import menuItem1 from "@/assets/1.png"
import menuItem2 from "@/assets/2.png"
import menuItem3 from "@/assets/3.png"
import menuItem4 from "@/assets/4.png"
import useScrollDirection from "@/hooks/use-scroll-direction"

const aboutImages = [
  { src: menuItem1, alt: "Halo-halo large with toppings" },
  { src: menuItem2, alt: "Halo-halo medium in cup" },
  { src: menuItem3, alt: "Crema de leche with toppings" },
  { src: menuItem4, alt: "Mais con yelo with toppings" },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutImages.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-32 bg-(--cream-white) relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] bg-(--parchment) border border-border shadow-diffuse-lg relative z-10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              {aboutImages.map((image, index) => {
                const distance = (index - activeIndex + aboutImages.length) % aboutImages.length
                const isActive = distance === 0

                return (
                  <motion.div
                    key={image.alt}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: aboutImages.length - distance }}
                    animate={{
                      opacity: distance > 2 ? 0 : 1 - distance * 0.2,
                      scale: isActive ? 1 : 0.94 - distance * 0.04,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                )
              })}
              <div className="absolute inset-0 bg-linear-to-t from-(--dark-espresso)/60 to-transparent" />
            </div>
            <h3 className="relative z-20 font-display text-4xl text-(--cream-white) p-8 self-end font-medium">Since 2026</h3>
          </div>
          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-(--soft-gold) opacity-20 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-subheading text-sm uppercase tracking-[0.3em] font-semibold text-(--coffee-brown)">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-(--dark-espresso) leading-tight">
            More than a cafe. <br /> A community hub.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Quezel's began with a simple idea: combine the warmth of a local neighborhood cafe with the seamless convenience of modern dining tech. 
            </p>
            <p>
              Whether you're ordering your morning flat white on the go, or sitting down for a relaxing Sunday brunch, our integrated POS and ordering hub ensures your experience is smooth, personal, and unforgettable. We source our beans ethically and craft our meals with heart.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="border-l-2 border-(--soft-gold) pl-6">
              <p className="font-display text-3xl text-(--dark-espresso)">100%</p>
              <p className="text-sm text-muted-foreground mt-2 font-medium uppercase tracking-widest">Local Beans</p>
            </div>
            <div className="border-l-2 border-(--soft-gold) pl-6">
              <p className="font-display text-3xl text-(--dark-espresso)">Fast</p>
              <p className="text-sm text-muted-foreground mt-2 font-medium uppercase tracking-widest">Smart Ordering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
