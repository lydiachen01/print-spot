import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <div className="font-bold text-2xl flex items-center">
            <span>PRINT</span>
            <Image src="/icons8-marker-30.png" className="mx-0.5 h-[22px]" alt="marker" width={22} height={22} />
            <span>SPOT</span>
        </div>
    )
}

export default Logo