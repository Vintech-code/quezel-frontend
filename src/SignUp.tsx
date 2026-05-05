import logo from "@/assets/logo3.png"
import { Link } from "react-router-dom"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-(--warm-beige) text-(--dark-espresso)">
      <header className="border-b hairline-gold">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Quezel's Cafe" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg">Quezel's Cafe</p>
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Sign up</p>
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
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[32px] border border-border bg-(--cream-white) p-8 shadow-diffuse">
            <h2 className="font-display text-3xl">Create your account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Already a member?{" "}
              <Link to="/auth/sign-in" className="font-semibold text-(--coffee-brown)">
                Sign in instead
              </Link>
            </p>
            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                  placeholder="First name"
                  type="text"
                />
                <input
                  className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                  placeholder="Last name"
                  type="text"
                />
              </div>
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
          </section>

          <section className="relative overflow-hidden rounded-[32px] border border-(--soft-gold) bg-(--parchment) p-10 shadow-diffuse">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-(--soft-gold) opacity-20 blur-2xl" />
            <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-(--coffee-brown) opacity-10" />
            <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Join the hub</p>
            <h1 className="mt-3 font-display text-4xl">Cafe perks await</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Get early access to seasonal specials and unlock member-only tastings.
            </p>
            <div className="mt-10 grid gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Collect points with every order.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Save your favorite desserts.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Get notified about new menu drops.
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
