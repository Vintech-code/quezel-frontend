import { useEffect, useRef, useState } from "react"

type ScrollDirection = "up" | "down"

export default function useScrollDirection(threshold = 4): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("down")
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const updateDirection = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? "down" : "up")
        lastScrollY.current = currentY
      }

      ticking.current = false
    }

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(updateDirection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  return direction
}
