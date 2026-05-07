import { useMemo, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  CheckCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react"

import logo from "@/assets/logo3.png"

type CartItem = {
  id: number
  name: string
  category: string
  price: number
  image: string
  quantity: number
}

export default function ShoppingCart() {
  const navigate = useNavigate()

  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("quezel_cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup")
  const [customerName, setCustomerName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [gcashReference, setGcashReference] = useState("")
  const [success, setSuccess] = useState(false)

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [cart])

  const deliveryFee = orderType === "delivery" && cart.length > 0 ? 20 : 0
  const total = subtotal + deliveryFee

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart)
    localStorage.setItem("quezel_cart", JSON.stringify(updatedCart))
  }

  const increaseQuantity = (id: number) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id: number) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (id: number) => {
    updateCart(cart.filter((item) => item.id !== id))
  }

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (cart.length === 0) return

    const order = {
      id: `QZ-${Date.now()}`,
      customerName,
      phoneNumber,
      address: orderType === "delivery" ? address : "Pick-up at store",
      orderType,
      paymentMethod: "GCash",
      gcashReference,
      items: cart,
      subtotal,
      deliveryFee,
      total,
      status: "Pending",
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem("quezel_latest_order", JSON.stringify(order))
    localStorage.removeItem("quezel_cart")
    setCart([])
    setSuccess(true)
  }

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-(--warm-beige) px-6">
        <div className="max-w-md rounded-[2rem] border border-(--soft-gold) bg-(--cream-white) p-8 text-center shadow-diffuse">
          <CheckCircle className="mx-auto size-20 text-(--soft-gold)" />

          <h1 className="mt-5 font-display text-3xl text-(--dark-espresso)">
            Order Placed!
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            Your order has been submitted successfully. Payment method is GCash.
          </p>

          <button
            onClick={() => navigate("/user/dashboard")}
            className="mt-7 rounded-full bg-(--coffee-brown) px-7 py-3 text-sm font-bold text-(--cream-white)"
          >
            Back to Menu
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-(--warm-beige) text-(--dark-espresso)">
      <header className="sticky top-0 z-50 border-b border-(--soft-gold)/40 bg-(--cream-white)/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/user/dashboard" className="flex items-center gap-3">
            <ArrowLeft size={20} />
            <img
              src={logo}
              alt="Quezel"
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="font-display text-xl">Review Order</span>
          </Link>

          <div className="flex items-center gap-2 text-sm font-bold text-(--coffee-brown)">
            <ShoppingBag size={20} />
            {cart.length} item{cart.length !== 1 ? "s" : ""}
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_420px]">
        <div className="rounded-[2rem] border border-(--soft-gold)/40 bg-(--cream-white) p-6 shadow-diffuse">
          <h1 className="font-display text-3xl">My Shopping Cart</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Review your selected products before checkout.
          </p>

          <div className="mt-6 space-y-4">
            {cart.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-(--soft-gold) p-10 text-center">
                <p className="font-semibold">Your cart is empty.</p>
                <Link
                  to="/user/dashboard"
                  className="mt-4 inline-block rounded-full bg-(--coffee-brown) px-6 py-3 text-sm font-bold text-(--cream-white)"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-4 rounded-2xl border border-(--soft-gold)/40 bg-white p-4 md:grid-cols-[90px_1fr_auto]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-xl object-contain"
                  />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-(--soft-gold)">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-display text-xl">{item.name}</h3>
                    <p className="mt-2 font-bold text-(--coffee-brown)">
                      ₱{item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 md:flex-col md:items-end">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-(--coffee-brown)"
                    >
                      <Trash2 size={18} />
                    </button>

                    <div className="flex items-center gap-3 rounded-full border border-(--soft-gold) px-3 py-2">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        <Minus size={15} />
                      </button>

                      <span className="min-w-6 text-center text-sm font-bold">
                        {item.quantity}
                      </span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        <Plus size={15} />
                      </button>
                    </div>

                    <p className="font-bold">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <form
          onSubmit={handleCheckout}
          className="h-fit rounded-[2rem] border border-(--soft-gold)/40 bg-(--cream-white) p-6 shadow-diffuse lg:sticky lg:top-24"
        >
          <h2 className="font-display text-2xl">Checkout</h2>

          <div className="mt-5 grid gap-4">
            <input
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Full Name"
              className="rounded-xl border border-(--soft-gold) bg-white px-4 py-3 text-sm outline-none focus:border-(--coffee-brown)"
            />

            <input
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="rounded-xl border border-(--soft-gold) bg-white px-4 py-3 text-sm outline-none focus:border-(--coffee-brown)"
            />

            <div>
              <p className="mb-2 text-sm font-bold">Order Option</p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOrderType("pickup")}
                  className={`rounded-xl border px-4 py-3 text-sm font-bold ${
                    orderType === "pickup"
                      ? "border-(--coffee-brown) bg-(--coffee-brown) text-(--cream-white)"
                      : "border-(--soft-gold) bg-white"
                  }`}
                >
                  Pick-up
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType("delivery")}
                  className={`rounded-xl border px-4 py-3 text-sm font-bold ${
                    orderType === "delivery"
                      ? "border-(--coffee-brown) bg-(--coffee-brown) text-(--cream-white)"
                      : "border-(--soft-gold) bg-white"
                  }`}
                >
                  Delivery
                </button>
              </div>
            </div>

            {orderType === "delivery" && (
              <textarea
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery Address"
                className="min-h-24 rounded-xl border border-(--soft-gold) bg-white px-4 py-3 text-sm outline-none focus:border-(--coffee-brown)"
              />
            )}

            <div className="rounded-2xl border border-(--soft-gold) bg-white p-4">
              <p className="text-sm font-bold text-(--coffee-brown)">
                Payment Method: GCash Only
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                No Cash on Delivery. Please enter your GCash reference number.
              </p>

              <input
                required
                value={gcashReference}
                onChange={(e) => setGcashReference(e.target.value)}
                placeholder="GCash Reference Number"
                className="mt-4 w-full rounded-xl border border-(--soft-gold) px-4 py-3 text-sm outline-none focus:border-(--coffee-brown)"
              />
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-(--soft-gold)/40 pt-5 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₱{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₱{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-(--coffee-brown)">
                ₱{total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            className="mt-6 w-full rounded-full bg-(--coffee-brown) px-6 py-4 text-sm font-bold uppercase tracking-wider text-(--cream-white) hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Place Order
          </button>
        </form>
      </section>
    </main>
  )
}