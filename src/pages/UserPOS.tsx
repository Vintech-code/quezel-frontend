import { useMemo, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ChevronDown,
  ChevronRight,
  LogOut,
  MapPin,
  Search,
  ShoppingCart,
  X,
} from "lucide-react"

import logo from "@/assets/logo3.png"
import item1 from "@/assets/1.png"
import item2 from "@/assets/2.png"
import item3 from "@/assets/3.png"
import item4 from "@/assets/4.png"

type Product = {
  id: number
  name: string
  category: string
  price: number
  image: string
}

type CartItem = Product & {
  quantity: number
}

const categories = ["All", "Dessert", "Snacks", "Drinks", "Burgers", "Combo Meals"]

const products: Product[] = [
  { id: 1, name: "Halo-Halo Large", category: "Dessert", price: 78, image: item1 },
  { id: 2, name: "Halo-Halo Medium", category: "Dessert", price: 55, image: item2 },
  { id: 3, name: "Crema De Leche", category: "Dessert", price: 78, image: item3 },
  { id: 4, name: "Mais Con Yelo", category: "Dessert", price: 65, image: item4 },
  { id: 5, name: "Burger with Fries Combo", category: "Combo Meals", price: 99, image: item1 },
  { id: 6, name: "French Fries Regular", category: "Snacks", price: 45, image: item2 },
]

export default function UserPOS() {
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [showLocationNotice, setShowLocationNotice] = useState(true)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase())

      return categoryMatch && searchMatch
    })
  }, [activeCategory, search])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id)

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [{ ...product, quantity: 1 }, ...currentCart]
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("quezel_user")
    navigate("/auth/sign-in")
  }

  return (
    <main className="min-h-screen bg-white text-(--dark-espresso)">
      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 bg-(--coffee-brown) text-(--cream-white)">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Quezel Logo"
              className="h-11 w-11 rounded-full bg-white object-contain p-1"
            />
            <span className="font-display text-2xl">Quezel</span>
          </Link>

          <button className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold md:flex">
            <MapPin size={20} />
            Select your address
            <ChevronDown size={16} />
          </button>

          <div className="flex items-center gap-5">
            <button
              onClick={handleLogout}
              className="hidden text-sm font-bold md:block"
            >
              Log out
            </button>

            {/* CART HOVER DROPDOWN */}
            <div className="group relative">
              <button className="relative flex items-center gap-2 rounded-full bg-(--cream-white) px-5 py-3 text-sm font-bold text-(--coffee-brown)">
                <ShoppingCart size={20} />
                Order Now

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-(--soft-gold) text-xs text-(--dark-espresso)">
                    {cartCount}
                  </span>
                )}
              </button>

              <div className="invisible absolute right-0 top-[58px] z-50 w-[400px] translate-y-2 border border-gray-200 bg-white text-(--dark-espresso) opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="absolute -top-3 right-8 h-6 w-6 rotate-45 bg-white" />

                <div className="relative bg-white p-4">
                  <p className="mb-4 text-sm text-gray-400">
                    Recently Added Products
                  </p>

                  {cart.length === 0 ? (
                    <div className="py-10 text-center">
                      <ShoppingCart className="mx-auto mb-3 text-gray-300" size={42} />
                      <p className="text-sm font-semibold">Your cart is empty</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Add products to see them here.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        {cart.slice(0, 5).map((item) => (
                          <div
                            key={item.id}
                            className="grid grid-cols-[48px_1fr_auto] items-center gap-3"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-12 w-12 border object-cover"
                            />

                            <p className="line-clamp-1 text-sm font-medium">
                              {item.name}
                              {item.quantity > 1 && (
                                <span className="ml-1 text-xs text-gray-400">
                                  x{item.quantity}
                                </span>
                              )}
                            </p>

                            <p className="text-sm font-semibold text-(--coffee-brown)">
                              ₱{item.price.toFixed(0)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          {cart.length > 5
                            ? `${cart.length - 5} More Products In Cart`
                            : `${cart.length} Product${
                                cart.length > 1 ? "s" : ""
                              } In Cart`}
                        </p>

                        <button className="bg-(--coffee-brown) px-5 py-3 text-sm font-bold text-(--cream-white) hover:opacity-90">
                          View My Quezel Treats
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LOCATION NOTICE */}
      {showLocationNotice && (
        <div className="bg-[#fff6df]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-[#8a5700]">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <p>
                Turn on your location to find the nearest Quezel store!{" "}
                <button className="font-bold underline">Turn On</button>
              </p>
            </div>

            <button onClick={() => setShowLocationNotice(false)}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* MENU HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="font-display text-3xl">Quezel Menu</h1>

          <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative w-full lg:w-[260px]">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-500" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search menu"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm outline-none focus:border-(--coffee-brown)"
              />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-lg px-5 py-3 text-sm font-bold transition ${
                    activeCategory === category
                      ? "bg-(--coffee-brown) text-(--cream-white)"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}

              <button className="flex items-center rounded-lg px-3 text-gray-600">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-8 font-display text-2xl">{activeCategory}</h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => addToCart(product)}
              className="group flex min-h-[120px] items-center gap-5 rounded-lg border border-gray-200 bg-white p-5 text-left transition hover:border-(--coffee-brown) hover:shadow-lg"
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 object-contain transition group-hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <h3 className="line-clamp-2 text-base font-bold leading-snug">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-(--coffee-brown)">
                  ₱{product.price.toFixed(2)}
                </p>

                <p className="mt-3 text-xs font-semibold text-gray-500">
                  Click to add to cart
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FEEDBACK TAB */}
      <button className="fixed right-0 top-1/2 z-40 -translate-y-1/2 bg-(--coffee-brown) px-3 py-5 text-xs font-bold text-(--cream-white) [writing-mode:vertical-rl]">
        Feedback
      </button>
    </main>
  )
}