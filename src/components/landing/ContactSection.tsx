import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useScrollDirection from "@/hooks/use-scroll-direction"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"

  return (
    <section id="contact" ref={sectionRef} className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-(--coffee-brown)">
            Reserve a table
          </p>
          <h2 className="mt-3 font-display text-3xl">Visit the lounge</h2>
          <p className="mt-4 text-muted-foreground">
            We host curated tastings, private gatherings, and late-night coffee bars.
            Leave a note and we will confirm availability.
          </p>
          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p>Purok 1-A, Ravidas Compound, Cagayan De Oro City</p>
            <p>roxasjequejhon96@gmail.com</p>
            <p>0945 548 3190</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          animate={shouldShow ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[28px] border border-border bg-(--cream-white) p-8 drop-shadow-lg"
        >
          <div className="grid gap-4">
            <input
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
              placeholder="Full name"
              type="text"
            />
            <input
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
              placeholder="Email address"
              type="email"
            />
            <input
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
              placeholder="Preferred date"
              type="text"
            />
            <textarea
              className="min-h-30 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
              placeholder="Tell us what you are celebrating"
            />
            <button className="mt-2 rounded-full bg-(--dark-espresso) px-6 py-3 text-sm font-semibold text-(--cream-white) drop-shadow-lg hover:opacity-90">
              Send request
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
