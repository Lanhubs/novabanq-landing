import type { ReactNode } from "react"
import Hero from "../components/hero"
import CountriesSection from "../components/countries-section"
import IdentitySection from "../components/identity-section"
import StepSection from "../components/steps-section"
import WaitlistForm from "../components/waitlist-form"
import BriefsSection from "../components/briefs-section"
import Footer from "../components/footer"

const Home = (): ReactNode => {
    const openDownload = (url?: string) => {
        if (url && /^https:\/\//.test(url)) window.location.assign(url)
        else window.location.hash = "waitlist"
    }

    return (
        <div className="flex flex-col">
            <Hero
                onGooglePlayClick={() => openDownload(import.meta.env.VITE_GOOGLE_PLAY_URL)}
                onAppStoreClick={() => openDownload(import.meta.env.VITE_APP_STORE_URL)}
            />
            <CountriesSection />
            <IdentitySection />
            <StepSection />
            <WaitlistForm />
            <BriefsSection />
            <Footer />
        </div>
    )
}
export default Home
