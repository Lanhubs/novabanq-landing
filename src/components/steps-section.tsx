import type { FC } from "react"
import step1Mockup from "../assets/create-account.png"
import step2Mockup from "../assets/get-tag.png"
import step3Mockup from "../assets/add-or-receive.png"
import step4Mockup from "../assets/send-money.png"

interface StepSectionProps {
    /** Image source for Step 1 (Create your Novabanq account) */
    step1Image?: string
    /** Image source for Step 2 (Get your @tag) */
    step2Image?: string
    /** Image source for Step 3 (Add or receive money) */
    step3Image?: string
    /** Image source for Step 4 (Send across Africa) */
    step4Image?: string
}

const StepSection: FC<StepSectionProps> = ({
    step1Image = step1Mockup,
    step2Image = step2Mockup,
    step3Image = step3Mockup,
    step4Image = step4Mockup,
}) => {
    return (
        <section id="how-it-works" className="w-full bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#111827] text-center tracking-tight leading-[1.2] mb-10 sm:mb-14 lg:mb-16">
                    From sign up to sending money in a few
                    <br className="hidden sm:inline" />
                    {" "}steps
                </h2>

                {/* 2x2 Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                    {/* CARD 1: Create your Novabanq account (Mint Green, Phone Top, Text Bottom) */}
                    <div className="group bg-linear-to-br from-[#A7E3BB] to-white rounded-3xl sm:rounded-[24px] lg:rounded-3xl overflow-hidden flex flex-col justify-between min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] relative shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-950/10 cursor-pointer">
                        {/* Mockup Image at Top */}
                        <div className="flex-1 w-full flex justify-center items-start overflow-hidden">
                            <img
                                src={step1Image}
                                alt="Create your Novabanq account"
                                className="w-[78%] sm:w-[82%] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto object-contain object-top drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:translate-y-1 animate-float-phone"
                            />
                        </div>

                        {/* Text Content at Bottom */}
                        <div className="p-5 sm:p-7 lg:p-8 pt-2 sm:pt-3 shrink-0 z-10">
                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-zinc-900 tracking-tight leading-snug">
                                Create your Novabanq account
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-600 font-normal mt-1">
                                Fast identity setup
                            </p>
                        </div>
                    </div>

                    {/* CARD 2: Get your @tag (Light Gray, Phone Top, Text Bottom) */}
                    <div className="group bg-[#E7E9EC]/80 rounded-3xl sm:rounded-[24px] lg:rounded-3xl overflow-hidden flex flex-col justify-between min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] relative shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-950/10 cursor-pointer">
                        {/* Mockup Image at Top */}
                        <div className="flex-1 w-full flex justify-center items-start overflow-hidden">
                            <img
                                src={step2Image}
                                alt="Get your @tag"
                                className="w-[78%] sm:w-[82%] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto object-contain object-top drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:translate-y-1 animate-float-right"
                            />
                        </div>

                        {/* Text Content at Bottom */}
                        <div className="p-5 sm:p-7 lg:p-8 pt-2 sm:pt-3 shrink-0 z-10">
                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-zinc-900 tracking-tight leading-snug">
                                Get your @tag
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-500 font-normal mt-1">
                                Your simple payment identity
                            </p>
                        </div>
                    </div>

                    {/* CARD 3: Add or receive money (Light Gray, Text Top, Phone Bottom) */}
                    <div className="group bg-[#E7E9EC]/80 rounded-3xl sm:rounded-[24px] lg:rounded-3xl overflow-hidden flex flex-col justify-between min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] relative shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-950/10 cursor-pointer">
                        {/* Text Content at Top */}
                        <div className="p-5 sm:p-7 lg:p-8 pb-2 sm:pb-3 shrink-0 z-10">
                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-zinc-900 tracking-tight leading-snug">
                                Add or receive money
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-500 font-normal mt-1">
                                Funding built for local rails
                            </p>
                        </div>

                        {/* Mockup Image at Bottom */}
                        <div className="flex-1 w-full flex justify-center items-end overflow-hidden pb-0">
                            <img
                                src={step3Image}
                                alt="Add or receive money"
                                className="w-[78%] sm:w-[82%] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto object-contain object-bottom drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1 animate-float-phone"
                            />
                        </div>
                    </div>

                    {/* CARD 4: Send across Africa (Mint Green, Text Top, Phone Bottom) */}
                    <div className="group bg-linear-to-br from-[#A7E3BB] to-white rounded-3xl sm:rounded-[24px] lg:rounded-3xl overflow-hidden flex flex-col justify-between min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] relative shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-950/10 cursor-pointer">
                        {/* Text Content at Top */}
                        <div className="p-5 sm:p-7 lg:p-8 pb-2 sm:pb-3 shrink-0 z-10">
                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-zinc-900 tracking-tight leading-snug">
                                Send across Africa
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-600 font-normal mt-1">
                                Transparent cross-border flow
                            </p>
                        </div>

                        {/* Mockup Image at Bottom */}
                        <div className="flex-1 w-full flex justify-center items-end overflow-hidden pb-0">
                            <img
                                src={step4Image}
                                alt="Send across Africa"
                                className="w-[78%] sm:w-[82%] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto object-contain object-bottom drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1 animate-float-left"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default StepSection