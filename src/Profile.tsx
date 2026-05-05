import logo from "@/assets/logo3.png"
import { Link } from "react-router-dom"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-(--warm-beige) text-(--dark-espresso)">
      <header className="border-b hairline-gold">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Quezel's Cafe" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg">Quezel's Cafe</p>
              <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Profile</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-(--coffee-brown) px-5 py-2 text-xs font-semibold uppercase tracking-wider text-(--dark-espresso) hover:bg-(--parchment)"
            >
              Back to Home
            </Link>
            <Link
              to="/auth/sign-in"
              className="rounded-full bg-(--coffee-brown) px-5 py-2 text-xs font-semibold uppercase tracking-wider text-(--cream-white) shadow-diffuse hover:opacity-90"
            >
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[32px] border border-border bg-(--cream-white) p-8 shadow-diffuse">
            <h2 className="font-display text-3xl">Account details</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Update your name and email to keep your account current.
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
              <button className="rounded-full bg-(--coffee-brown) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--cream-white) shadow-diffuse hover:opacity-90">
                Save changes
              </button>
            </form>
          </section>

          <section className="relative overflow-hidden rounded-[32px] border border-(--soft-gold) bg-(--parchment) p-10 shadow-diffuse">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-(--soft-gold) opacity-20 blur-2xl" />
            <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-(--coffee-brown) opacity-10" />
            <p className="text-xs uppercase tracking-[0.3em] text-(--coffee-brown)">Security</p>
            <h3 className="mt-3 font-display text-3xl">Refresh your password</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Keep your account secure by updating your password regularly.
            </p>
            <form className="mt-8 grid gap-4">
              <input
                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                placeholder="Current password"
                type="password"
              />
              <input
                className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm"
                placeholder="New password"
                type="password"
              />
              <button className="rounded-full border border-(--coffee-brown) bg-(--parchment) px-6 py-3 text-xs font-semibold uppercase tracking-wider text-(--dark-espresso) hover:bg-(--coffee-brown) hover:text-(--cream-white) transition">
                Update password
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
