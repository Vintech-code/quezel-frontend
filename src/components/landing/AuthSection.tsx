import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useNavigate } from "react-router-dom"
import useScrollDirection from "@/hooks/use-scroll-direction"

const STATIC_EMAIL = "user@gmail.com"
const STATIC_PASSWORD = "user123"

export default function AuthSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      localStorage.setItem("quezel_user", JSON.stringify({ email }))
      navigate("/user/pos")
    } else {
      setError("Invalid email or password.")
    }
  }

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
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">
                Welcome back
              </p>
              <h2 className="mt-3 font-display text-3xl text-(--dark-espresso)">
                Your favorites are waiting
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Sign in to browse products, add to cart, and place your order.
              </p>
            </div>

            <div className="mx-auto max-w-lg">
              <div className="mb-5 rounded-2xl border border-(--soft-gold) bg-(--parchment) p-4 text-sm text-(--dark-espresso)">
                <p className="font-semibold">Temporary Account</p>
                <p>Email: user@gmail.com</p>
                <p>Password: user123</p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                  <p className="rounded-xl bg-red-100 px-4 py-2 text-sm text-red-600">
                    {error}
                  </p>
                )}

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