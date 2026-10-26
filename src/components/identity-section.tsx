import type { FC } from "react"

interface IdentitySectionProps {
  /** Optional mockup image source if provided by user */
  mockupImageSrc?: string
}

const IdentitySection: FC<IdentitySectionProps> = ({ mockupImageSrc }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#50C878] text-white pt-16 sm:pt-20 lg:pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8">
        {/* Left Column: Heading & Subtitle */}
        <div className="w-full lg:w-1/2 text-left z-10 pb-4 lg:pb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.12] tracking-tight">
            Your identity. <br />
            Your money. <br />
            One @tag.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/95 font-normal leading-relaxed max-w-md">
            Share your Novabanq @tag and get paid without asking people to
            navigate complicated account numbers
          </p>
        </div>

        {/* Right Column: Phone Mockup with Floating Tag Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end self-end relative">
          <div className="relative w-full max-w-95 sm:max-w-107.5 flex justify-center items-end">
            {/* Floating Card: Left overlapping the phone */}
            <div className="absolute -left-4 sm:-left-10 lg:-left-40 top-12 sm:top-16 z-30 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl shadow-emerald-950/20 border border-white/80 w-64 sm:w-72 text-left text-zinc-900 transition-all duration-300 hover:-translate-y-1">
              <span className="text-xs font-semibold text-zinc-800 tracking-tight">
                Your account @tag
              </span>
              <div className="text-base sm:text-lg font-bold text-[#10A34F] mt-1 tracking-tight">
                @danclem.ng
              </div>
              <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">
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

            {/* Mockup Container */}
            <div className="relative z-20 w-full flex justify-center">
              {mockupImageSrc ? (
                /* When user provides the mockup image */
                <img
                  src={mockupImageSrc}
                  alt="Novabanq Tag App Mockup"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              ) : (
                /* High-fidelity phone screen fallback matching the design screenshot */
                <div className="relative w-75 sm:w-87.5 rounded-t-[44px] p-2.5 pb-0 bg-zinc-900 border-4 border-b-0 border-zinc-800 shadow-2xl">
                  <div className="bg-white rounded-t-[36px] overflow-hidden text-zinc-900 pt-3 px-5 pb-6">
                    {/* Status Bar */}
                    <div className="px-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-800">
                        9:41
                      </span>
                      {/* Dynamic Island */}
                      <div className="h-5.5 w-22 bg-black rounded-full flex items-center justify-end pr-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700" />
                      </div>
                      <div className="flex items-center gap-1 text-zinc-800 text-[10px] font-bold">
                        <span>●●●</span>
                        <div className="w-3.5 h-2 border border-zinc-800 rounded-2xs flex items-center p-0.5">
                          <div className="h-full w-1.5 bg-zinc-800" />
                        </div>
                      </div>
                    </div>

                    {/* In-app navigation header */}
                    <div className="mt-4 flex items-center justify-between pb-3">
                      <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 text-xs">
                        ‹
                      </div>
                      <h4 className="text-xs font-bold text-zinc-900">
                        Receive money
                      </h4>
                      <div className="w-7 h-7" />
                    </div>

                    {/* In-screen Account @tag Card */}
                    <div className="mt-2 bg-zinc-50/80 rounded-2xl p-4 border border-zinc-100 text-left">
                      <span className="text-[11px] font-semibold text-zinc-800">
                        Your account @tag
                      </span>
                      <div className="text-base font-bold text-[#10A34F] mt-0.5">
                        @danclem.ng
                      </div>
                      <p className="text-[10px] text-zinc-400 mt-0.5">
                        Share this so anyone in Africa can pay you
                      </p>
                      <div className="mt-2.5 flex items-center gap-3 text-[11px] text-zinc-500">
                        <span>📋 Copy @tag</span>
                        <span>🔗 Share link</span>
                      </div>
                    </div>

                    {/* Bank Details section */}
                    <div className="mt-5 text-left">
                      <h5 className="text-xs font-bold text-zinc-900 mb-2.5">
                        Your NGN bank details
                      </h5>
                      <div className="bg-zinc-50/80 rounded-2xl p-3.5 border border-zinc-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-zinc-400">
                            Account name
                          </div>
                          <div className="text-xs font-bold text-zinc-900 mt-0.5">
                            Temi Adeyemi
                          </div>
                        </div>
                        <span className="text-zinc-400 text-xs cursor-pointer">
                          📋
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IdentitySection