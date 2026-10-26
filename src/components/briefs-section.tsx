import { useState, type FC } from "react"

const faqItems = [
    {
        question: "What is NovaBanq?",
        answer:
            "NovaBanq is a pan-African financial platform that lets you send, receive, and manage money across African borders with one simple account and a unique @tag identity.",
    },
    {
        question: "Why should I join the waitlist",
        answer:
            "Joining the waitlist gives you early access to NovaBanq before the public launch. You'll be among the first to experience seamless cross-border transactions across Africa.",
    },
    {
        question: "Which countries will Novabanq support",
        answer:
            "NovaBanq is launching with support for Nigeria, Ghana, Kenya, South Africa, and more African countries will be added progressively after launch.",
    },
    {
        question: "Will Novabanq have account numbers",
        answer:
            "Yes. Every NovaBanq user gets a local bank account number for receiving funds, alongside your unique @tag for easy peer-to-peer payments.",
    },
    {
        question: "When will Novabanq launch",
        answer:
            "NovaBanq is currently in development and will launch soon. Join the waitlist to be notified as soon as we go live.",
    },
    {
        question: "Will I be able to send money across Africa",
        answer:
            "Absolutely. NovaBanq is built specifically for cross-border payments across Africa. Send money to anyone in supported countries instantly and transparently.",
    },
]

const BriefsSection: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-[#EEEEEE] w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111827] tracking-tight leading-snug mb-8 sm:mb-10">
                    Questions? We've got you.
                </h2>

                {/* Accordion List */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#E7E9EC] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
                        >
                            {/* Question Row */}
                            <button
                                type="button"
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 cursor-pointer text-left group"
                            >
                                <span className="text-sm sm:text-[15px] font-semibold text-[#111827] pr-4">
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#111827] shrink-0 transition-transform duration-300 ease-in-out ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Answer Panel */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-6 sm:px-8 pb-5 sm:pb-6 text-sm text-[#4B5563] leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BriefsSection