import type { ReactNode } from "react"
import Hero from "../components/hero"
import CountriesSection from "../components/countries-section"
import IdentitySection from "../components/identity-section"
import StepSection from "../components/steps-section"
import WaitlistForm from "../components/waitlist-form"
import BriefsSection from "../components/briefs-section"
import Footer from "../components/footer"

const Home = (): ReactNode => {
    return (
        <div className="flex flex-col">
            <Hero />
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
