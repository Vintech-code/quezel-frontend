import { type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Mail,
  MessageSquare,
  Package,
  Receipt,
  RotateCcw,
  ShoppingBag,
  SlidersHorizontal,
  Store,
  Tags,
  UserCog,
} from "lucide-react"
import { useAuth } from "@/lib/AuthContext"
import AdminHeader from "@/components/admin/AdminHeader"
import AdminSidebar, { type AdminMenuItem } from "@/components/admin/AdminSidebar"

type AdminLayoutProps = {
  title: string
  actions?: ReactNode
  breadcrumbs?: { label: string; to?: string }[]
  children: ReactNode
}

const menuItems: AdminMenuItem[] = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", icon: Package },
  { label: "Categories", icon: Tags },
  { label: "Brand Kits", icon: Store },
  { label: "Orders", icon: ShoppingBag },
  { label: "Transactions", icon: Receipt },
  { label: "Refunds", icon: RotateCcw },
  { label: "Messages", icon: MessageSquare },
  { label: "Email", icon: Mail },
  { label: "Preferences", icon: SlidersHorizontal },
  { label: "Profile", icon: UserCog },
]

export default function AdminLayout({ title, actions, breadcrumbs, children }: AdminLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
    navigate("/", { replace: true })
  }

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#1d1a14]">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 lg:flex-row lg:px-6">
        <AdminSidebar
          menuItems={menuItems}
          activePath={location.pathname}
          onSignOut={handleSignOut}
        />

        <main className="min-w-0 flex-1">
          <AdminHeader
            title={title}
            breadcrumbs={
              breadcrumbs ?? [
                { label: "Admin", to: "/admin/dashboard" },
                { label: title },
              ]
            }
            actions={actions}
          />
          {children}
        </main>
      </div>
    </div>
  )
}
