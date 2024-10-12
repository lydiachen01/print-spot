import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    theme: string;
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
    const logoURL = (theme == "light") ? "/icons8-marker-30.png" : "/icons8-marker-30-white.png"

    return (
        <Link href="\">
            <div className="font-bold text-2xl flex items-center">
                <span>PRINT</span>
                <Image src={logoURL} className="mx-0.5 h-[22px]" alt="marker" width={22} height={22} />
                <span>SPOT</span>
            </div>
        </Link>
    )
}

export default Logo