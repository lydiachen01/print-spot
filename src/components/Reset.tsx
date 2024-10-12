function refresh() {
    window.location.href = window.location.hostname === "localhost" 
        ? "http://localhost:3000/#18/42.3706/-71.096" 
        : "https://printspot.vercel.app/#18/42.3706/-71.096"
}

const ResetButton:React.FC = () => {
    return (
        <button
            className="px-4 py-2 rounded bg-black text-white ml-4"
            onClick={refresh}
        >Reset</button>
    )
}

export default ResetButton;