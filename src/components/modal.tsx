const reportIssue = () => {
    alert("Report Issue Was Triggered.")
}

// useState for showModal
const Model = () => {
    return (
        <div>
            <div className="w-96 border border-blue p-8 pt-6 rounded-xl bg-white drop-shadow">
                <div className="flex justify-end">
                    <img className="w-6 text-right" src="icons8-close-50.png"></img>
                </div>
                <div className="font-bold text-xl pr-[165px]">Printer Name</div>
                <div className="mb-2">XXX Street, Building, Floor YYY</div>
                <span className="flex mb-3">
                    <img src="icons8-black-and-white-48.png" className="w-8 h-8"></img>
                    <img src="icons8-color-wheel-48.png" className="w-8 h-8"></img>
                    {/* <img src="icons8-fax-50.png" className="w-8 h-8"></img> */}
                </span>
                <div>Current Status:</div>
                <p className="mb-24">Low on paper. Low on ink.</p>
                <div className="pb-3">Last Used: <Date></Date></div>
                <button className="left border border-black rounded-lg px-4 py-2 hover:bg-black hover:text-white">Report issue</button>
            </div>
        </div>
    )
}

export default Model