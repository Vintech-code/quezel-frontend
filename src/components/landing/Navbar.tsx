import { useState } from "react"
import logo from "@/assets/logo3.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-(--dark-espresso)">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Quezel's Cafe" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl tracking-wide">Quezel</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="hover:text-(--soft-gold)">About</a>
          <a href="#menu" className="hover:text-(--soft-gold)">Menu</a>
          <a href="#how" className="hover:text-(--soft-gold)">How it works</a>
          <a href="#testimonials" className="hover:text-(--soft-gold)">Stories</a>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-(--coffee-brown) md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span
            className={`absolute h-0.5 w-5 bg-(--dark-espresso) transition-transform duration-300 ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-(--dark-espresso) transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-(--dark-espresso) transition-transform duration-300 ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>
      <div className="absolute left-0 right-0 top-full md:hidden">
        <nav
          className={`mx-6 mb-4 rounded-2xl border border-(--coffee-brown) bg-(--cream-white) p-4 text-sm font-semibold text-(--dark-espresso) shadow-diffuse transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <a href="#about" className="block rounded-lg px-3 py-2 transition hover:bg-(--parchment)">About</a>
          <a href="#menu" className="mt-1 block rounded-lg px-3 py-2 transition hover:bg-(--parchment)">Menu</a>
          <a href="#how" className="mt-1 block rounded-lg px-3 py-2 transition hover:bg-(--parchment)">How it works</a>
          <a href="#testimonials" className="mt-1 block rounded-lg px-3 py-2 transition hover:bg-(--parchment)">Stories</a>
        </nav>
      </div>
    </header>
  );
}
