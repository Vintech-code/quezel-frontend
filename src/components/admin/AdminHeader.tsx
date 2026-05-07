import { type ReactNode } from "react"
import { Bell, Plus, Search, Settings } from "lucide-react"
import AdminBreadcrumbs from "@/components/admin/AdminBreadcrumbs"

type BreadcrumbItem = {
  label: string
  to?: string
}

type AdminHeaderProps = {
  title: string
  breadcrumbs: BreadcrumbItem[]
  actions?: ReactNode
}

export default function AdminHeader({ title, breadcrumbs, actions }: AdminHeaderProps) {
  return (
    <header className="mb-4 ml-auto flex w-full flex-col gap-3 rounded-[28px] border border-[#e6d8c8] bg-[#fff7ee] px-5 py-4 shadow-diffuse md:w-fit md:items-end">
      <div className="text-right">
        <AdminBreadcrumbs items={breadcrumbs} />
        <h2 className="mt-2 font-display text-3xl text-[#1f3a34]">{title}</h2>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <div className="flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-white px-3 py-2">
          <Search className="h-4 w-4 text-[#9b7c5c]" />
          <input
            type="search"
            placeholder="Search"
            className="w-32 bg-transparent text-sm text-[#1f3a34] placeholder:text-[#b89a79] focus:outline-none"
          />
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#1f3a34]"
        >
          <Settings className="h-4 w-4" />
          Settings
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-[#e6d8c8] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#1f3a34]"
        >
          <Bell className="h-4 w-4" />
          Alerts
        </button>
        {actions ?? (
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#1f3a34] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f6efe6]"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        )}
      </div>
    </header>
  )
}
