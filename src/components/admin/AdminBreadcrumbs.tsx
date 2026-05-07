import { Link } from "react-router-dom"

type BreadcrumbItem = {
  label: string
  to?: string
}

type AdminBreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export default function AdminBreadcrumbs({ items }: AdminBreadcrumbsProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {item.to ? (
            <Link to={item.to} className="hover:text-[#1f3a34]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#c06b27]">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-[#d2b89a]">/</span>}
        </span>
      ))}
    </nav>
  )
}
