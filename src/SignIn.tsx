import logo from "@/assets/logo3.png"
import { Link } from "react-router-dom"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-(--warm-beige) text-(--dark-espresso)">
      <header className="border-b">
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

      <main className="px-6 py-8 md:py-10">
        <div className="mx-auto flex max-w-6xl justify-center">
          <section className="w-full max-w-lg rounded-[28px] border border-(--soft-gold)/60 bg-(--cream-white)/90 p-8 shadow-diffuse">
            <div className="mb-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Welcome back</p>
              <h1 className="mt-2 font-display text-3xl">Sign In</h1>
            </div>
            <h2 className="font-display text-xl text-center">Your favorites are waiting</h2>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              New here?{" "}
              <Link to="/auth/sign-up" className="font-semibold text-(--coffee-brown)">
                Create an account
              </Link>
            </p>
            <form className="mt-6 grid gap-3">
              <input
                className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 text-sm"
                placeholder="Email address"
                type="email"
              />
              <input
                className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 text-sm"
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
            <div className="my-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              or
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-(--dark-espresso) transition hover:bg-(--parchment)"
              >
                <svg aria-hidden="true" viewBox="0 0 48 48" className="h-4 w-4">
                  <path fill="#EA4335" d="M24 9.5c3.3 0 5.6 1.4 6.9 2.6l5-4.9C32.6 4.2 28.7 2.5 24 2.5 14.7 2.5 6.8 7.8 3 15.5l5.9 4.6C10.8 13.8 16.9 9.5 24 9.5z" />
                  <path fill="#34A853" d="M46 24.5c0-1.6-.2-2.8-.5-4.1H24v7.8h12.7c-.6 3.1-2.4 5.7-5.1 7.5l6 4.6c3.5-3.2 5.4-7.8 5.4-15.8z" />
                  <path fill="#4A90E2" d="M8.9 28.1A14.6 14.6 0 0 1 8 24c0-1.4.3-2.8.8-4.1l-6-4.6A21.5 21.5 0 0 0 2.5 24c0 3.5.9 6.8 2.6 9.7l6.1-5.6z" />
                  <path fill="#FBBC05" d="M24 45.5c6 0 11-2 14.7-5.5l-6-4.6c-1.7 1.1-4 1.7-8.7 1.7-6.9 0-12.7-4.6-14.8-10.9l-6.1 5.6C6.9 40.4 14.9 45.5 24 45.5z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-(--dark-espresso) transition hover:bg-(--parchment)"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-[#1877F2]">
                  <path d="M24 12.1C24 5.5 18.6 0 12 0S0 5.5 0 12.1C0 18 4.4 22.9 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3H15.9c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.9V24C19.6 22.9 24 18 24 12.1z" />
                </svg>
                Facebook
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
