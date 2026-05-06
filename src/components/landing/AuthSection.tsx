import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useScrollDirection from "@/hooks/use-scroll-direction"

export default function AuthSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"

  return (
    <section id="auth" ref={sectionRef} className="px-6 py-24 bg-(--warm-beige)">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-4xl rounded-[32px] border border-(--soft-gold)/60 bg-(--cream-white)/90 p-10 shadow-diffuse">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Welcome back</p>
              <h2 className="mt-3 font-display text-3xl text-(--dark-espresso)">Your favorites are waiting</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Sign in to reorder, save your favorite halos, and earn points for every cup.
              </p>
            </div>
            <div className="mx-auto max-w-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Sign in</p>
              <h3 className="mt-2 font-display text-2xl text-(--dark-espresso)">Welcome back</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                New here? <span className="font-semibold text-(--coffee-brown)">Create an account</span>
              </p>
              <form className="mt-6 grid gap-4">
                <input
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                  placeholder="Email address"
                  type="email"
                />
                <input
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                  placeholder="Password"
                  type="password"
                />
                <div className="text-right text-xs font-semibold text-(--coffee-brown)">Forgot password?</div>
                <button className="rounded-full bg-(--coffee-brown) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--cream-white) shadow-diffuse hover:opacity-90">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
