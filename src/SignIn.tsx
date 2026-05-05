import logo from "@/assets/logo3.png"
import { Link } from "react-router-dom"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-(--warm-beige) text-(--dark-espresso)">
      <header className="border-b hairline-gold">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Quezel's Cafe" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg">Quezel's Cafe</p>
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Sign in</p>
            </div>
          </div>
          <Link
            to="/"
            className="rounded-full border border-(--coffee-brown) px-5 py-2 text-xs font-semibold uppercase tracking-wider text-(--dark-espresso) hover:bg-(--parchment)"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative overflow-hidden rounded-[32px] border border-(--soft-gold) bg-(--parchment) p-10 shadow-diffuse">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-(--coffee-brown) opacity-10" />
            <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-(--soft-gold) opacity-20 blur-2xl" />
            <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Welcome back</p>
            <h1 className="mt-3 font-display text-4xl">Your favorites are waiting</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Sign in to reorder, save your favorite halos, and earn points for every cup.
            </p>
            <div className="mt-10 grid gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Quick reorders for busy mornings.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Track your rewards and offers.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Store your pickup preferences.
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-border bg-(--cream-white) p-8 shadow-diffuse">
            <h2 className="font-display text-3xl">Sign in</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              New here?{" "}
              <Link to="/auth/sign-up" className="font-semibold text-(--coffee-brown)">
                Create an account
              </Link>
            </p>
            <form className="mt-8 grid gap-4">
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
              <div className="text-right">
                <Link to="/auth/forgot-password" className="text-xs font-semibold text-(--coffee-brown)">
                  Forgot password?
                </Link>
              </div>
              <button className="rounded-full bg-(--coffee-brown) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--cream-white) shadow-diffuse hover:opacity-90">
                Sign In
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
