import type { ReactNode } from "react"
import Header from "./header"
import DownloadButtons from "./download-buttons"
import RecipientAccountCard from "./recipient-account-card"
import AccountTagCard from "./account-tag-card"
import PhoneMockup from "./phone-mockup"
import MobileAccountCards from "./mobile-account-cards"

interface HeroProps {
    onGooglePlayClick?: () => void
    onAppStoreClick?: () => void
    onJoinWaitlist?: () => void
}

const Hero = ({
    onGooglePlayClick,
    onAppStoreClick,
    onJoinWaitlist,
}: HeroProps): ReactNode => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-white via-[#ebfaf1] to-[#7be1a8]/60 flex flex-col justify-between">
            {/* Decorative ambient radial aura in background */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-70"
                style={{
                    background:
                        "radial-gradient(circle at 50% 65%, rgba(134, 239, 172, 0.45) 0%, rgba(187, 247, 208, 0.25) 40%, rgba(255, 255, 255, 0) 75%)",
                }}
            />

            {/* Navigation Header */}
            <Header onJoinWaitlist={onJoinWaitlist} />

            {/* Hero Content */}
            <section className="relative z-10    flex flex-col items-center text-center  ">
                {/* Main Headline */}
                <div className="max-w-7xl flex mx-auto flex-col items-center sm:mx-10 lg:mx-12 mt-8 sm:mt-12 md:mt-16 mb-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#111827] max-w-4xl leading-[1.12]">
                        One account. All <br className="hidden sm:inline" />
                        of Africa.
                    </h1>
                    <p className="mt-5 text-base sm:text-lg md:text-xl text-zinc-600 max-w-xl mx-auto font-normal leading-relaxed">
                        Send, receive and move money across African borders with one simple
                        Novabanq account
                    </p>
                    <DownloadButtons
                        onGooglePlayClick={onGooglePlayClick}
                        onAppStoreClick={onAppStoreClick}
                    />
                </div>

                {/* Mockup Showcase with Interactive Floating Cards */}
                <div className="w-full relative mt-12 sm:mt-16 flex justify-center items-center pb-8 sm:pb-12 ">
                    {/* Floating Card: Left - Recipient account */}
                    <RecipientAccountCard />

                    {/* Central Mockup Container */}
                    <PhoneMockup />

                    {/* Floating Card: Right - Your account @tag */}
                    <AccountTagCard />
                </div>

                {/* Mobile Floating Badges fallback (visible only on small screens) */}
                <MobileAccountCards />
            </section>
        </div>
    )
}

export default Hero