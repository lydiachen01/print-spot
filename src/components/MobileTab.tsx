interface TabInfo {
    name: string;
    building: string;
}

const MobileTab: React.FC<TabInfo> = ( {name, building} ) => {
    return(
        <>
            {/* compute own distance and time using long and lat */}
            <div className="border rounded-2xl p-4 mx-4 my-2">
                <label className="font-bold">{name}</label>
                <p className="text-sm">{building}</p>
            </div>
        </>
    )
}

export default MobileTab