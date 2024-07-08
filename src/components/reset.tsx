function refresh() {
    window.location.href = "http://localhost:3000/#18/42.3706/-71.096"
}

const ResetButton = () => {
    return (
        <button
            className="px-14 py-2 rounded bg-black text-white ml-4"
            onClick={refresh}
        >Reset URL</button>
    )
}

export default ResetButton;