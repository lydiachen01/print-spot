import ResetButton from "./reset"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6">
            <div className="flex space-x-4">
                <a href="/#link1" className="hover:underline">Tufts University</a>
                {/* <a href="/#link2" className="underline">Link 2</a>
                <a href="/#link3" className="underline">Link 3</a> */}
            </div>
            <div className="font-bold text-2xl flex">
                {/* Make sure to rebrand - already exists a "Campus Print" */}
                <span>MAP</span>
                <img src="icons8-marker-30.png" className="mt-1.5 mx-1 h-[22px]"></img>
                <span>PRINT</span>
            </div>
            <div>
                <button className="px-14 py-2 rounded bg-black text-white ml-4">Login</button>
                <ResetButton />
            </div>
        </nav>
    )
}

export default Navbar