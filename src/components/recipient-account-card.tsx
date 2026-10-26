import type { FC } from "react"

const RecipientAccountCard: FC = () => {
    return (
        <div className="hidden md:flex flex-col absolute left-2 lg:xl:left-[15%] xl:left-[20%] top-16 lg:top-24 z-30 bg-white/95 backdrop-blur-md rounded-[14px] p-4 sm:p-5 shadow-xl shadow-emerald-950/10 border border-white/80 w-64 lg:w-90.5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-float-left">
            <h3 className="font-semibold text-zinc-900 text-sm tracking-tight mb-2.5">
                Recipient account
            </h3>
            <div className="py-2 border-b border-zinc-100">
                <span className="text-xs text-zinc-400">Enter account number</span>
            </div>
            <div className="py-2.5 border-b border-zinc-100 flex items-center justify-between text-xs text-zinc-700">
                <span>Select bank</span>
                <svg
                    className="w-3.5 h-3.5 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
            <div className="pt-2.5 text-xs text-zinc-400">
                Or enter account tag
            </div>
        </div>
    )
}

export default RecipientAccountCard
