import Logo from "./Logo"

const Footer : React.FC= () => {
    return (
        <div className="bg-black pb-24 pt-20 px-20 grid md:grid-cols-3">
            <div className="text-white">
                <Logo theme="dark"/>
                <p className="pt-6 text-gray-400">
                    In a rush? No idea where the nearest printer is? 
                    <br/><label className="font-bold italic underline">PrintSpot</label> will fix that ✨✉️</p>

                <p className="pt-3 text-gray-600 italic"> Print with ease!</p>
                <p className="pt-10 text-gray-500">© 2024 NoShenagians Inc.</p>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Footer