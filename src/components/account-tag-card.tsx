import type { FC } from "react"

const AccountTagCard: FC = () => {
    return (
        <div className="hidden md:flex flex-col absolute -right-2 lg:right-[15%] xl:right-[15%] top-20 lg:top-28 z-30 bg-white/95 backdrop-blur-md rounded-[14px] p-4 sm:p-5 shadow-xl shadow-emerald-950/10 border border-white/80 w-64 lg:w-90.5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-float-right">
            <span className="text-xs font-medium text-zinc-800 tracking-tight">
                Your account @tag
            </span>
            <div className="text-base font-bold text-[#10A34F] mt-1 tracking-tight">
                @danclem.ng
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
                Share this so anyone in Africa can pay you
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs font-medium text-zinc-600">
                <button
                    type="button"
                    className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                    <span>Copy @tag</span>
                </button>
                <button
                    type="button"
                    className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                    </svg>
                    <span>Share link</span>
                </button>
            </div>
        </div>
    )
}

export default AccountTagCard
