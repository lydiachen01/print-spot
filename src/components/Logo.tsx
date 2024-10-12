import Image from "next/image";

interface LogoProps {
    theme: string;
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
    const logoURL = (theme == "light") ? "/icons8-marker-30.png" : "/icons8-marker-30-white.png"

    return (
        <div className="font-bold text-2xl flex items-center">
            <span>PRINT</span>
            <Image src={logoURL} className="mx-0.5 h-[22px]" alt="marker" width={22} height={22} />
            <span>SPOT</span>
        </div>
    )
}

export default Logo