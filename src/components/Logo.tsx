import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface LogoProps {
    theme: string;
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
    const logoURL = (theme === "light") ? "/icons8-marker-30.png" : "/icons8-marker-30-white.png";

    return (
        <Link href="/" passHref>
            <div className="font-bold text-2xl flex items-center">
                <span>PRINT</span>
                <Image 
                    src={logoURL} 
                    className="mx-0.5" 
                    alt="marker" 
                    width={20} 
                    height={20} 
                    loading="lazy" 
                />
                <span>SPOT</span>
            </div>
        </Link>
    );
}

export default Logo;