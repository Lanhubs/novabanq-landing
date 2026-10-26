import type { FC } from "react"

interface DownloadButtonsProps {
    onGooglePlayClick?: () => void
    onAppStoreClick?: () => void
}

const DownloadButtons: FC<DownloadButtonsProps> = ({
    onGooglePlayClick,
    onAppStoreClick,
}) => {
    return (
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center gap-4">
            {/* Google Play Button */}
            <button
                type="button"
                onClick={onGooglePlayClick}
                className="flex items-center gap-3 px-6 py-4.25 rounded-3xl bg-white text-zinc-900 border border-zinc-200/90 hover:shadow-md hover:border-zinc-300 active:scale-95 transition-all duration-200 cursor-pointer"
            >
                {/* Google Play SVG Icon */}
                <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.609 1.814C3.23 2.213 3 2.815 3 3.593V20.407C3 21.185 3.23 21.787 3.609 22.186L3.708 22.285L13.125 12.868V12.632V11.132L3.708 1.715L3.609 1.814Z"
                        fill="#00E676"
                    />
                    <path
                        d="M16.264 16.007L13.125 12.868V11.132L16.264 7.993L16.363 8.052L20.082 10.163C21.141 10.763 21.141 11.737 20.082 12.337L16.363 14.448L16.264 16.007Z"
                        fill="#FFD600"
                    />
                    <path
                        d="M16.363 15.948L13.125 12.71L3.609 22.226C3.959 22.595 4.549 22.645 5.218 22.265L16.363 15.948Z"
                        fill="#FF1744"
                    />
                    <path
                        d="M16.363 8.052L5.218 1.735C4.549 1.355 3.959 1.405 3.609 1.774L13.125 11.29L16.363 8.052Z"
                        fill="#00B0FF"
                    />
                </svg>
                <span className="text-sm sm:text-[15px] font-medium tracking-tight">
                    Download on Google play
                </span>
            </button>

            {/* Apple Store Button */}
            <button
                type="button"
                onClick={onAppStoreClick}
                className="flex items-center gap-3 px-6 py-4.25 rounded-3xl bg-[#1A1A1A] text-white hover:bg-black active:scale-95 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
                {/* Apple Logo SVG */}
                <svg
                    className="w-5 h-5 shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.12.64-2.81 1.44-.59.69-.99 1.76-.94 2.82 1.07.08 2.12-.55 2.74-1.39z" />
                </svg>
                <span className="text-sm sm:text-[15px] font-medium tracking-tight">
                    Download on Apple store
                </span>
            </button>
        </div>
    )
}

export default DownloadButtons
