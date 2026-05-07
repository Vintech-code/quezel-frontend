import AdminLayout from "@/layouts/AdminLayout"

export default function AdminDashboard() {
  return (
    <AdminLayout title="Overview">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="rounded-[26px] border border-[#e6d8c8] bg-[#fff7ee] p-6 shadow-diffuse">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">Total Balance</p>
              <p className="mt-1 text-sm text-[#9b7c5c]">Last updated 12:15 pm</p>
            </div>
            <p className="font-display text-2xl text-[#1f3a34]">PHP 25,640</p>
          </div>
          <div className="mt-4 rounded-[18px] border border-[#e6d8c8] bg-white/70 p-4">
            <svg viewBox="0 0 240 90" className="h-24 w-full">
              <defs>
                <linearGradient id="balance-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2b8f84" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2b8f84" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="#e6d8c8" strokeWidth="1">
                <line x1="0" y1="15" x2="240" y2="15" />
                <line x1="0" y1="45" x2="240" y2="45" />
                <line x1="0" y1="75" x2="240" y2="75" />
              </g>
              <path
                d="M0,65 L24,48 L48,54 L72,40 L96,52 L120,32 L144,44 L168,30 L192,38 L216,26 L240,36 L240,90 L0,90 Z"
                fill="url(#balance-line)"
              />
              <polyline
                fill="none"
                stroke="#2b8f84"
                strokeWidth="2"
                points="0,65 24,48 48,54 72,40 96,52 120,32 144,44 168,30 192,38 216,26 240,36"
              />
              <circle cx="216" cy="26" r="3.5" fill="#c06b27" />
            </svg>
          </div>
        </section>

        <section className="rounded-[26px] border border-[#e6d8c8] bg-[#fff7ee] p-6 shadow-diffuse">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">Statistics</p>
            <button className="rounded-full border border-[#e6d8c8] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1f3a34]">
              This Month
            </button>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9b7c5c]">Total Earnings</span>
              <div className="text-right">
                <p className="font-display text-xl text-[#1f3a34]">PHP 12,235</p>
                <p className="text-xs font-semibold text-[#2b8f84]">+6.2%</p>
              </div>
            </div>
            <div className="h-px bg-[#e6d8c8]" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9b7c5c]">Number of Sales</span>
              <div className="text-right">
                <p className="font-display text-xl text-[#1f3a34]">31,890</p>
                <p className="text-xs font-semibold text-[#d46b55]">-2.1%</p>
              </div>
            </div>
            <div className="h-px bg-[#e6d8c8]" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#9b7c5c]">Product Views</span>
              <div className="text-right">
                <p className="font-display text-xl text-[#1f3a34]">129,781</p>
                <p className="text-xs font-semibold text-[#2b8f84]">+8.3%</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <section className="rounded-[26px] border border-[#e6d8c8] bg-[#fff7ee] p-6 shadow-diffuse">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">Purchase Activity</p>
              <h3 className="mt-2 font-display text-xl text-[#1f3a34]">Orders Overview</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#9b7c5c]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2b8f84]" /> Completed
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f6b86a]" /> Pending
              </span>
              <button className="rounded-full border border-[#e6d8c8] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1f3a34]">
                2026
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-9 items-end gap-3">
            {[
              [60, 40],
              [72, 48],
              [64, 42],
              [78, 55],
              [70, 44],
              [82, 58],
              [66, 46],
              [74, 50],
              [68, 45],
            ].map(([completed, pending], index) => (
              <div key={`bar-${index}`} className="flex flex-col items-center gap-2">
                <div className="flex w-full flex-col items-center gap-1">
                  <div className="h-20 w-full rounded-full bg-[#f1e8dc]" />
                  <div className="relative -mt-[5.25rem] w-full rounded-full bg-[#2b8f84]" style={{ height: `${completed}px` }} />
                  <div className="relative -mt-2 w-full rounded-full bg-[#f6b86a]" style={{ height: `${pending}px` }} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#b89a79]">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#e6d8c8] bg-[#fff7ee] p-6 shadow-diffuse">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">Popular Tags</p>
            <button className="rounded-full border border-[#e6d8c8] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1f3a34]">
              Tags
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "halo-halo",
              "iced latte",
              "barkada",
              "combo",
              "new",
              "merienda",
              "family",
              "coffee",
              "refresh",
              "snacks",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e6d8c8] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1f3a34]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <section className="rounded-[26px] border border-[#e6d8c8] bg-[#fff7ee] p-6 shadow-diffuse">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">Recent Messages</p>
            <button className="text-xs font-semibold uppercase tracking-wider text-[#2b8f84]">
              View All
            </button>
          </div>
          <div className="mt-5 space-y-4">
            {[
              { name: "Jolly Annan", note: "Need to update Friday promo." },
              { name: "Anna Glory", note: "Can we add a new bundle?" },
              { name: "Paul Reyes", note: "Stock refill ready for pickup." },
            ].map((message) => (
              <div
                key={message.name}
                className="flex items-center justify-between rounded-[18px] border border-[#e6d8c8] bg-white px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-[#1f3a34]">{message.name}</p>
                  <p className="text-xs text-[#9b7c5c]">{message.note}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#b89a79]">
                  12:50 pm
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[26px] border border-[#e6d8c8] bg-[#fff7ee] p-6 shadow-diffuse">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c06b27]">Latest Transactions</p>
            <button className="rounded-full border border-[#e6d8c8] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1f3a34]">
              This Month
            </button>
          </div>
          <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e6d8c8] bg-white">
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-3 border-b border-[#e6d8c8] px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-[#b89a79]">
              <span>Transaction</span>
              <span>Date</span>
              <span>Status</span>
              <span>Amount</span>
            </div>
            {[
              { id: "TR-001-23456", date: "02-12-2026", status: "Completed", amount: "PHP 550" },
              { id: "TR-001-23457", date: "02-12-2026", status: "Processing", amount: "PHP 980" },
              { id: "TR-001-23458", date: "02-11-2026", status: "Completed", amount: "PHP 310" },
            ].map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-3 px-4 py-3 text-sm text-[#1f3a34]"
              >
                <span>{row.id}</span>
                <span className="text-[#9b7c5c]">{row.date}</span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    row.status === "Completed" ? "text-[#2b8f84]" : "text-[#d46b55]"
                  }`}
                >
                  {row.status}
                </span>
                <span className="font-semibold">{row.amount}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  )
}
