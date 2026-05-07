import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import aboutPhoto1 from "@/assets/pic1.jpg"
import aboutPhoto2 from "@/assets/pic2.jpg"
import aboutPhoto3 from "@/assets/pic3.jpg"
import aboutPhoto4 from "@/assets/pic4.jpg"
import aboutPhoto5 from "@/assets/pic5.jpg"
import aboutPhoto6 from "@/assets/pic6.jpg"
import useScrollDirection from "@/hooks/use-scroll-direction"

const aboutImages = [
  { src: aboutPhoto1, alt: "Quezel's pop-up booth at night" },
  { src: aboutPhoto2, alt: "Community group at the Quezel's booth" },
  { src: aboutPhoto3, alt: "Team members at the booth" },
  { src: aboutPhoto4, alt: "Customer enjoying halo-halo" },
  { src: aboutPhoto5, alt: "Serving area with halo-halo cups" },
  { src: aboutPhoto6, alt: "Friends enjoying halo-halo together" },
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
            <h3 className="relative z-20 font-display text-4xl text-(--cream-white) p-8 self-end font-medium">Since 2025</h3>
          </div>
          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-(--soft-gold) opacity-20 blur-3xl" />
          <div className="mt-6 flex justify-center gap-2">
            {aboutImages.map((image, index) => (
              <button
                key={image.alt}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full border border-(--soft-gold) transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-(--soft-gold) scale-110"
                    : "bg-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`Show photo ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
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
              Quezel’s started with a simple idea inspired by the hot weather — to create refreshing treats that people could enjoy and cool down with. What began with halo-halo soon expanded into customer favorites like Mais Con Yelo and Crema de Leche.
            </p>
            <p>
              As Quezel’s grew, the founders realized people also loved affordable snacks and combo meals, leading to the addition of burgers, fries, and hotdog sandwiches to the menu.
            </p>
            <p>
              The name “Quezel’s” comes from the combination of the founders’ names, Jeque Jhon Roxas and Hazel Ann Cababaros — representing their passion, partnership, and shared dream of serving the community with food made from the heart.
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
