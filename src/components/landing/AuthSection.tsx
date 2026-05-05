import { motion } from "framer-motion"

export default function AuthSection() {
  return (
    <section id="auth" className="px-6 py-24 bg-(--warm-beige)">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[1fr_1.1fr]"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-(--soft-gold) bg-(--parchment) p-10 shadow-diffuse">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-(--coffee-brown) opacity-10" />
            <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-(--soft-gold) opacity-20 blur-2xl" />
            <p className="text-sm uppercase tracking-[0.3em] text-(--coffee-brown)">Member access</p>
            <h2 className="mt-4 font-display text-4xl text-(--dark-espresso)">Sign in for faster orders</h2>
            <p className="mt-4 text-muted-foreground">
              Save your favorites, track past orders, and unlock special cafe-only rewards.
            </p>
            <div className="mt-8 space-y-4 text-sm text-(--dark-espresso)">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Early access to seasonal flavors.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                One-tap reorders and saved pickups.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Earn points for every cup.
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-(--cream-white) p-8 shadow-diffuse">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Sign in</p>
                <h3 className="mt-2 font-display text-2xl text-(--dark-espresso)">Welcome back</h3>
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
                  <button className="rounded-full bg-(--coffee-brown) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--cream-white) shadow-diffuse hover:opacity-90">
                    Sign In
                  </button>
                </form>
              </div>

              <div className="flex-1 border-t border-(--soft-gold) pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Sign up</p>
                <h3 className="mt-2 font-display text-2xl text-(--dark-espresso)">Create account</h3>
                <form className="mt-6 grid gap-4">
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
                    placeholder="Password"
                    type="password"
                  />
                  <button className="rounded-full border border-(--coffee-brown) bg-(--parchment) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--dark-espresso) hover:bg-(--coffee-brown) hover:text-(--cream-white) transition">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
