import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useScrollDirection from "@/hooks/use-scroll-direction"

const testimonials = [
  {
    quote: 'A quiet sanctuary with the most thoughtful espresso service in town.',
    name: 'Mira L.',
    title: 'Designer',
  },
  {
    quote: 'The tasting flight feels like a tiny coffee ceremony. I come weekly.',
    name: 'Jonas P.',
    title: 'Creative director',
  },
  {
    quote: 'Warm, slow, intentional. The playlist alone is worth a visit.',
    name: 'Nina S.',
    title: 'Writer',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"

  return (
    <section id="testimonials" ref={sectionRef} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="font-subheading text-sm uppercase tracking-[0.3em] text-(--coffee-brown)">
              Guest stories
            </p>
            <h2 className="mt-3 font-display text-3xl">What people are saying</h2>
          </div>
          <span className="text-sm text-muted-foreground">
            4.9 average rating
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={shouldShow ? "show" : "hidden"}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-(--cream-white) p-6 drop-shadow-lg"
            >
              <p className="font-serif-light text-lg">"{item.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
