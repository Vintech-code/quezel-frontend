import logo from "@/assets/logo3.png"
import { Link } from "react-router-dom"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-(--warm-beige) text-(--dark-espresso)">
      <header className="border-b hairline-gold">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Quezel's Cafe" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg">Quezel's Cafe</p>
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Reset access</p>
            </div>
          </div>
          <Link
            to="/auth/sign-in"
            className="rounded-full border border-(--coffee-brown) px-5 py-2 text-xs font-semibold uppercase tracking-wider text-(--dark-espresso) hover:bg-(--parchment)"
          >
            Back to Sign In
          </Link>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative overflow-hidden rounded-[32px] border border-(--soft-gold) bg-(--parchment) p-10 shadow-diffuse">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-(--coffee-brown) opacity-10" />
            <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-(--soft-gold) opacity-20 blur-2xl" />
            <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Need a hand?</p>
            <h1 className="mt-3 font-display text-4xl">We will send a reset link</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Enter your email and we will email you a secure link to reset your password.
            </p>
            <div className="mt-10 grid gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Links expire in 30 minutes.
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(--coffee-brown)" />
                Keep an eye on your spam folder.
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-border bg-(--cream-white) p-8 shadow-diffuse">
            <h2 className="font-display text-3xl">Forgot password</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Remembered it?{" "}
              <Link to="/auth/sign-in" className="font-semibold text-(--coffee-brown)">
                Sign in instead
              </Link>
            </p>
            <form className="mt-8 grid gap-4">
              <input
                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                placeholder="Email address"
                type="email"
              />
              <button className="rounded-full bg-(--coffee-brown) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--cream-white) shadow-diffuse hover:opacity-90">
                Send Reset Link
              </button>
              <Link
                to="/auth/reset-password"
                className="text-center text-xs font-semibold uppercase tracking-wider text-(--coffee-brown)"
              >
                I already have a reset link
              </Link>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
