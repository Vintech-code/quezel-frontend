import { Link } from "react-router-dom"
import type { ForwardRefExoticComponent, RefAttributes } from "react"
import type { LucideProps } from "lucide-react"

type IconType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

type AdminMenuItem = {
  label: string
  icon: IconType
  to?: string
}

type AdminSidebarProps = {
  menuItems: AdminMenuItem[]
  activePath: string
  onSignOut: () => void
}

export default function AdminSidebar({ menuItems, activePath, onSignOut }: AdminSidebarProps) {
  return (
    <aside className="w-full shrink-0 rounded-[28px] border border-[#e6d8c8] bg-[#1f3a34] p-6 text-[#f6efe6] shadow-diffuse lg:w-72">
      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#f6b86a]">Admin Panel</p>
        <h1 className="mt-2 font-display text-2xl">Quezel's</h1>
        <p className="mt-2 text-xs text-[#d7c6b1]">Cafe Command Center</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = item.to && activePath === item.to
          const Icon = item.icon
          const baseClasses =
            "flex w-full items-center justify-between rounded-full px-4 py-2.5 text-sm font-semibold transition"

          if (item.to) {
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`${baseClasses} ${
                  isActive
                    ? "bg-[#f6b86a] text-[#1f3a34]"
                    : "text-[#f6efe6] hover:bg-[#295048]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </span>
              </Link>
            )
          }

          return (
            <button
              key={item.label}
              type="button"
              className={`${baseClasses} text-[#f6efe6] hover:bg-[#295048]`}
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>

      <div className="mt-8 rounded-[20px] border border-[#345f56] bg-[#243f39] p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#f6b86a]">Admin Access</p>
        <p className="mt-2 text-sm">Need to switch accounts?</p>
        <button
          type="button"
          onClick={onSignOut}
          className="mt-3 w-full rounded-full border border-[#f6b86a] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f6b86a] hover:bg-[#f6b86a] hover:text-[#1f3a34]"
        >
          Sign Out
        </button>
        <Link
          to="/"
          className="mt-3 block text-center text-xs font-semibold uppercase tracking-wider text-[#d7c6b1]"
        >
          Back to Site
        </Link>
      </div>
    </aside>
  )
}

export type { AdminMenuItem }
