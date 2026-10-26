import type { FC } from "react"

const MobileAccountCards: FC = () => {
    return (
        <div className="md:hidden flex flex-col gap-3 w-full max-w-xs mt-4 pb-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/80 text-left">
                <h3 className="font-semibold text-zinc-900 text-xs mb-1">
                    Recipient account
                </h3>
                <div className="text-[11px] text-zinc-500">
                    Enter account number • Select bank
                </div>
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/80 text-left">
                <span className="text-xs font-medium text-zinc-700">
                    Your account @tag:
                </span>
                <span className="font-bold text-emerald-600 text-xs ml-1.5">
                    @danclem.ng
                </span>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                    Share this so anyone in Africa can pay you
                </div>
            </div>
        </div>
    )
}

export default MobileAccountCards
