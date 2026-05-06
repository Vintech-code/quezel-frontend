import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useScrollDirection from "@/hooks/use-scroll-direction"
import logo from "@/assets/logo3.png"

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(footerRef, { margin: "-100px" })
  const scrollDirection = useScrollDirection()
  const shouldShow = isInView || scrollDirection === "up"

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 16 }}
      animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6 }}
      className="border-t hairline-gold px-6 py-16 bg-(--warm-beige)"
    >
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-sm">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Quezel Logo" 
              className="h-12 w-12 object-contain"
            />
            <p className="font-display text-xl text-(--dark-espresso)">Quezel</p>
          </div>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A cozy café experience blending artisanal coffee, local flavors,
            and a modern ordering system.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold text-(--dark-espresso) mb-3">Explore</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#menu" className="hover:text-(--dark-espresso)">Menu</a></li>
            <li><a href="#how" className="hover:text-(--dark-espresso)">How it Works</a></li>
            <li><a href="#about" className="hover:text-(--dark-espresso)">About</a></li>
            <li><a href="#" className="hover:text-(--dark-espresso)">Order Now</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-(--dark-espresso) mb-3">Contact</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>Cagayan de Oro, Philippines</li>
            <li>+63 912 345 6789</li>
            <li>quezelscafe@gmail.com</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="font-semibold text-(--dark-espresso) mb-3">Opening Hours</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>Mon - Fri: 8:00 AM – 10:00 PM</li>
            <li>Sat - Sun: 9:00 AM – 11:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto max-w-6xl mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground border-t pt-6">
        <div className="flex gap-4">
          <span className="hover:text-(--dark-espresso) cursor-pointer">Instagram</span>
          <span className="hover:text-(--dark-espresso) cursor-pointer">Facebook</span>
          <span className="hover:text-(--dark-espresso) cursor-pointer">Spotify</span>
        </div>
        <p>© 2026 Quezel. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}