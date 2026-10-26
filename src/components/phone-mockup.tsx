import type { FC } from "react"
import mockupImageSrc from "../assets/novabanq-mockup.png"

interface PhoneMockupProps {
    imageSrc?: string
}

const PhoneMockup: FC<PhoneMockupProps> = ({ imageSrc = mockupImageSrc }) => {
    return (
        <div className="relative z-20 mx-auto ">

                <img
                    src={imageSrc}
                    alt="Novabanq Mobile App Mockup"
                    className="w-70 sm:w-[320px] md:w-87.5 lg:w-95 h-auto object-contain mx-auto drop-shadow-2xl animate-float-phone"
                />
           
        </div>
    )
}

export default PhoneMockup
