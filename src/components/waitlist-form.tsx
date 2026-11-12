import { useState, type FC, type FormEvent } from "react"
import { joinWaitlist, WaitlistApiError } from "../lib/waitlist-api"

// Keyed on the API's `error.code`, which is the field the contract says
// to branch on; `error.message` is for logs. A 409 reads as good news
// because the visitor's goal — being on the list — is already true.
const messageForCode = (code: string): string => {
    if (code === "WAITLIST_EMAIL_EXISTS") return "You're already on the waitlist with this email."
    if (code === "RATE_LIMITED") return "Too many attempts. Please wait a few minutes and try again."
    if (code === "VALIDATION_ERROR") return "Please check your details and try again."
    return "Something went wrong. Please try again."
}

const WaitlistForm: FC = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!fullName.trim()) {
            setMessage("Please enter your full name.")
            return
        }

        setSubmitting(true)
        setMessage("")
        try {
            await joinWaitlist({
                full_name: fullName.trim(),
                email: email.trim(),
                // Omitted when blank rather than sent as "": the API
                // rejects a phone shorter than 7 characters and refuses
                // unknown fields outright.
                ...(phone.trim() ? { phone: phone.trim() } : {}),
            })
            setMessage("You're on the list. We'll be in touch when NovaBanq opens.")
        } catch (error) {
            setMessage(messageForCode(error instanceof WaitlistApiError ? error.code : "INTERNAL_ERROR"))
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section id="waitlist" className="w-full bg-[#50C878] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.15]">
                        Be early to the movement
                    </h2>
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-lg mx-auto">
                        NovaBanq is being built for Africans who live, work,
                        <br className="hidden sm:inline" />
                        trade and connect across borders.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#FFFFFF36] backdrop-blur-sm p-7 sm:p-10 lg:p-12">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="waitlist-fullname"
                                className="text-sm sm:text-[15px] font-semibold text-[#1a3d2a]"
                            >
                                Full name
                            </label>
                            <input
                                id="waitlist-fullname"
                                type="text"
                                required
                                autoComplete="name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full bg-[#FFFFFF73] backdrop-blur-sm text-[#1a3d2a] placeholder-[#1a3d2a]/50 text-sm sm:text-[15px] font-medium px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg outline-none border-none focus:ring-2 focus:ring-white/40 transition-all"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="waitlist-email"
                                className="text-sm sm:text-[15px] font-semibold text-[#1a3d2a]"
                            >
                                Email address
                            </label>
                            <input
                                id="waitlist-email"
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full bg-[#FFFFFF73] backdrop-blur-sm text-[#1a3d2a] placeholder-[#1a3d2a]/50 text-sm sm:text-[15px] font-medium px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg outline-none border-none focus:ring-2 focus:ring-white/40 transition-all"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="waitlist-phone"
                                className="text-sm sm:text-[15px] font-semibold text-[#1a3d2a]"
                            >
                                Phone number
                            </label>
                            <input
                                id="waitlist-phone"
                                type="tel"
                                autoComplete="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+234..."
                                className="w-full bg-[#FFFFFF73] backdrop-blur-sm text-[#1a3d2a] placeholder-[#1a3d2a]/50 text-sm sm:text-[15px] font-medium px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg outline-none border-none focus:ring-2 focus:ring-white/40 transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-[#005100] hover:bg-[#003d00] text-white text-sm sm:text-base font-semibold py-3.5 sm:py-4 rounded-lg mt-2 sm:mt-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-[#003d00]/30 flex items-center justify-center gap-2.5"
                        >
                            <span>{submitting ? "Joining…" : "Join waitlist"}</span>
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                        {message && <p role="status" className="text-sm text-[#1a3d2a]">{message}</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default WaitlistForm
