import Logo from "./Logo"

const Footer : React.FC= () => {
    return (
        <div className="bg-[#FFC300] pb-24 pt-20 px-20 md:px-32 grid md:grid-cols-3 text-[#D62839]">
            <div>
                <Logo theme="dark"/>
                <p className="pt-6">
                    In a rush? No idea where the nearest printer is? 
                    <br/><label className="font-bold italic underline">PrintSpot</label> will fix that! 📬</p>

                <p className="pt-3 italic"> Print with ease!</p>
                <p className="pt-10">© 2024 Created By LXC</p>
            </div>
            {/* <ul className="text-center">
                <li className="font-bold pb-5">Product</li>
                <li className="pb-2">Product</li>
                <li className="pb-2">Product</li>
                <li className="pb-2">Product</li>
            </ul>
            <ul className="text-center">                 */}
                {/* <li className="font-bold pb-5">Socials</li> */}
            {/* </ul> */}
        </div>
    )
}

export default Footer