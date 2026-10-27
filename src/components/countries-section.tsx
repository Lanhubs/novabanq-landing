import type { FC } from "react"
import defaultGlobeImg from "../assets/map.webp"


/* Crisp SVG Flag Components */
const NigeriaFlag: FC = () => (
  <svg
    className="w-3.5 h-2.5 sm:w-4 sm:h-3 md:w-5 md:h-3.5 rounded-xs shrink-0 shadow-xs overflow-hidden"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="10" height="20" fill="#008751" />
    <rect x="10" width="10" height="20" fill="#FFFFFF" />
    <rect x="20" width="10" height="20" fill="#008751" />
  </svg>
)

const GhanaFlag: FC = () => (
  <svg
    className="w-3.5 h-2.5 sm:w-4 sm:h-3 md:w-5 md:h-3.5 rounded-xs shrink-0 shadow-xs overflow-hidden"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="6.67" fill="#CF0921" />
    <rect y="6.67" width="30" height="6.67" fill="#FCD20F" />
    <rect y="13.34" width="30" height="6.67" fill="#006B3F" />
    <polygon
      points="15,7.2 16.2,10.6 19.8,10.6 16.9,12.7 18,16.1 15,14 12,16.1 13.1,12.7 10.2,10.6 13.8,10.6"
      fill="#000000"
    />
  </svg>
)

const KenyaFlag: FC = () => (
  <svg
    className="w-3.5 h-2.5 sm:w-4 sm:h-3 md:w-5 md:h-3.5 rounded-xs shrink-0 shadow-xs overflow-hidden"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="6" fill="#000000" />
    <rect y="6" width="30" height="1" fill="#FFFFFF" />
    <rect y="7" width="30" height="6" fill="#BB0000" />
    <rect y="13" width="30" height="1" fill="#FFFFFF" />
    <rect y="14" width="30" height="6" fill="#006600" />
    <ellipse
      cx="15"
      cy="10"
      rx="2.8"
      ry="5.2"
      fill="#BB0000"
      stroke="#FFFFFF"
      strokeWidth="0.6"
    />
    <circle cx="15" cy="10" r="1.1" fill="#000000" />
  </svg>
)

const SouthAfricaFlag: FC = () => (
  <svg
    className="w-3.5 h-2.5 sm:w-4 sm:h-3 md:w-5 md:h-3.5 rounded-xs shrink-0 shadow-xs overflow-hidden"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="30" height="10" fill="#E03C31" />
    <rect y="10" width="30" height="10" fill="#001489" />
    <polygon points="0,0 12,10 0,20" fill="#000000" />
    <polygon points="0,0 2,0 14,10 2,20 0,20 12,10" fill="#FFB612" />
    <path
      d="M0,7 L10,7 L19,10 L30,10 L30,13 L19,13 L10,13 L0,13 Z"
      fill="#FFFFFF"
      opacity="0.5"
    />
    <path
      d="M0,6 L12,6 L19,10 L30,10 L30,12 L19,12 L12,14 L0,14 L5,10 Z"
      fill="#007749"
    />
  </svg>
)

const CountriesSection: FC = (
) => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28 bg-linear-to-r from-[#fbfdfc] to-[#ebfaf1] via-[#50C878]/40 via-60%">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-175 h-175 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(134, 239, 172, 0.45) 0%, rgba(187, 247, 208, 0.2) 50%, rgba(255, 255, 255, 0) 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        {/* Left Column: Heading and Subtitle */}
        <div className="w-full lg:w-5/12 text-left z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#111827] leading-[1.12]">
            Africa is connected <br />
            but it’s money isn’t
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-md">
            Different countries, different currencies, different payment rails,
            different apps.
          </p>
        </div>

        {/* Right Column: Africa Globe with Dashed Orbits and Floating Badges */}
        <div className="w-full lg:w-7/12 flex justify-center items-center">
          <div className="relative w-full max-w-75 sm:max-w-115 md:max-w-145 lg:max-w-155 aspect-square flex items-center justify-center select-none">
            {/* Concentric Dashed Orbit Circles and Orbiting Badges */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit z-20">
              {/* Outer Orbit */}
              <div className="w-[94%] h-[94%] rounded-full border sm:border-2 border-dashed border-[#000000A6] absolute" />
              {/* Inner Orbit */}
              <div className="w-[78%] h-[78%] rounded-full border sm:border-2 border-dashed border-[#000000A6] absolute" />

              {/* Badge 1: Top-Right (Ghana to Nigeria) */}
              <div className="absolute top-[4%] sm:top-[6%] right-[4%] sm:right-[12%] rotate-[-22deg] flex items-center gap-1 sm:gap-1.5 md:gap-2.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2.5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg shadow-black/8 border border-white/90 text-[9px] sm:text-[11px] md:text-xs lg:text-[13px] font-semibold text-zinc-900 whitespace-nowrap transition-transform duration-300 hover:scale-105 pointer-events-auto">
                <GhanaFlag />
                <span>Ghana to Nigeria</span>
                <NigeriaFlag />
              </div>

              {/* Badge 2: Middle-Left (Nigeria to Ghana) */}
              <div className="absolute top-[26%] sm:top-[30%] left-[0%] sm:left-[-10%] rotate-[-8deg] flex items-center gap-1 sm:gap-1.5 md:gap-2.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2.5 bg-[#F2F4F6] backdrop-blur-md rounded-xl sm:rounded-2xl shadow-black/8 text-[9px] sm:text-[11px] md:text-xs lg:text-[13px] font-semibold text-zinc-900 whitespace-nowrap transition-transform duration-300 hover:scale-105 pointer-events-auto">
                <NigeriaFlag />
                <span>Nigeria to Ghana</span>
                <GhanaFlag />
              </div>

              {/* Badge 3: Right (Ghana to Kenya) */}
              <div className="absolute top-[30%] sm:top-[32%] right-[0%] sm:right-[-10%] rotate-[-4deg] flex items-center gap-1 sm:gap-1.5 md:gap-2.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2.5 bg-[#F2F4F6] backdrop-blur-md rounded-xl sm:rounded-2xl shadow-black/8 text-[9px] sm:text-[11px] md:text-xs lg:text-[13px] font-semibold text-zinc-900 whitespace-nowrap transition-transform duration-300 hover:scale-105 pointer-events-auto">
                <GhanaFlag />
                <span>Ghana to Kenya</span>
                <KenyaFlag />
              </div>

              {/* Badge 4: Bottom-Left (South Africa to Ghana) */}
              <div className="absolute bottom-[16%] sm:bottom-[18%] left-[0%] sm:left-[-6%] -rotate-30 flex items-center gap-1 sm:gap-1.5 md:gap-2.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2.5 bg-[#F2F4F6] backdrop-blur-md rounded-xl sm:rounded-2xl shadow-black/8 text-[9px] sm:text-[11px] md:text-xs lg:text-[13px] font-semibold text-zinc-900 whitespace-nowrap transition-transform duration-300 hover:scale-105 pointer-events-auto">
                <SouthAfricaFlag />
                <span>South Africa to Ghana</span>
                <GhanaFlag />
              </div>

              {/* Badge 5: Bottom-Right (Ghana to South Africa) */}
              <div className="absolute bottom-[8%] sm:bottom-[10%] right-[2%] sm:right-[-5%] rotate-30 flex items-center gap-1 sm:gap-1.5 md:gap-2.5 px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2.5 bg-[#F2F4F6] backdrop-blur-md rounded-xl sm:rounded-2xl shadow-black/8 text-[9px] sm:text-[11px] md:text-xs lg:text-[13px] font-semibold text-zinc-900 whitespace-nowrap transition-transform duration-300 hover:scale-105 pointer-events-auto">
                <GhanaFlag />
                <span>Ghana to South Africa</span>
                <SouthAfricaFlag />
              </div>
            </div>

            {/* Earth Globe & Center Card Container (Animated together so card remains locked to the center) */}
            <div className="relative z-10 w-[68%] sm:w-[72%] aspect-square flex items-center justify-center animate-float-globe">
              {/* Earth Globe Image */}
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={defaultGlobeImg}
                  alt="African continent on globe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Center Floating Card: Info Callout */}
              <div className="absolute z-30 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3.5 md:px-5 md:py-4 border border-white/80 max-w-50 sm:max-w-64 md:max-w-70 lg:max-w-77.5 text-center transition-all duration-300 hover:shadow-2xl">
                <p className="text-[10px] sm:text-xs md:text-[13px] font-semibold text-zinc-800 leading-tight sm:leading-snug">
                  Moving money across African borders can still mean juggling
                  multiple platforms, unclear exchange rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountriesSection