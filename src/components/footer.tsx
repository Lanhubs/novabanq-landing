import type { FC } from "react"
import logo from "../assets/logo.png"

const footerColumns = [
    {
        title: "Product",
        links: [
            { text: "How it works", href: "#how-it-works" },
            { text: "Features", href: "#features" },
            { text: "FAQ", href: "#faqs" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "About us", href: "#about" },
            { text: "Waitlist", href: "#waitlist" },
            { text: "Contact", href: import.meta.env.VITE_CONTACT_EMAIL ? `mailto:${import.meta.env.VITE_CONTACT_EMAIL}` : undefined },
        ],
    },
    {
        title: "Socials",
        links: [
            { text: "Twitter", href: "https://x.com/usenovabanq" },
            { text: "Instagram", href: import.meta.env.VITE_INSTAGRAM_URL },
            { text: "Linkedin", href: import.meta.env.VITE_LINKEDIN_URL },
        ],
    },
]

const Footer: FC = () => {
    return (
        <footer className="bg-[#1A1A1A] w-full pt-14 sm:pt-20 lg:pt-24 pb-0 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-12 sm:mb-16">
                    <img
                        src={logo}
                        alt="Novabanq"
                        className="h-6 sm:h-7 w-auto object-contain "
                    />
                    <span className="text-white text-[28px] font-normal">
                        Novabanq
                    </span>
                    
                </div>

                {/* Link Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-5 mb-20 sm:mb-28 lg:mb-30">
                    {footerColumns.map((column) => (
                        <div key={column.title} className="flex flex-col gap-4">
                            <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-tight">
                                {column.title}
                            </h3>
                            <ul className="flex flex-col gap-2.5 sm:gap-3">
                                {column.links.map((link) => (
                                    <li key={link.text}>
                                        <a
                                            href={link.href}
                                            aria-disabled={!link.href}
                                            title={!link.href ? "Coming soon" : undefined}
                                            className="text-sm sm:text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-200"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Giant NOVABANQ Text at Bottom */}
            <div className="w-full flex justify-center overflow-hidden -mb-4 sm:-mb-4 lg:-mb-4">
                <h2
                    className="text-[#A7E3BB] font-extrabold tracking-tighter leading-none select-none text-[60px] sm:text-[120px] md:text-[160px] lg:text-[160px] xl:text-[160px] whitespace-nowrap translate-y-4 sm:translate-y-6 lg:translate-y-8 "
                >
                    NOVABANQ
                </h2>
            </div>
        </footer>
    )
}

export default Footer
